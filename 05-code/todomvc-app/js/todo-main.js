Vue.component("todo-main", {
  template: `
    <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model='checkAll'>
				<label for="toggle-all" v-show='finish'>Mark all as complete</label>
				<ul class="todo-list">
					<li :class="{completed:item.done,editing:editId === item.id}" v-for='item in todoList' :key='item.id'>
						<div class="view">
							<input class="toggle" type="checkbox" v-model='item.done'>
							<label @dblclick='edit(item.id)'>{{item.name}}</label>
							<button class="destroy" @click='del(item)'></button>
						</div>
						<input class="edit" value="Create a TodoMVC template" v-model.lazy='item.name' @keyup.enter='update' @keyup.esc='update' @blur='update' >
					</li>
				</ul>
			</section>
    `,
  props: ["todoList", "editId", "finish", "todoList"],

  methods: {
    del(id) {
      this.$emit("del", id);
    },
    edit(id) {
      this.$emit("edit", id);
    },
    update() {
      this.$emit("update");
    },
  },
  computed: {
    checkAll: {
      get() {
        return this.todoList.every((item) => item.done);
      },
      set(value) {
        // console.log(value);
        console.log(234);
        this.$emit("checkall", value);
      },
    },
  },
});
