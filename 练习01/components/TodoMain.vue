<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model='follow'/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <!-- These are here just to show the structure of the list items -->
      <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
      <li
        :class="{ completed: item.done, editing: editId === item.id }"
        v-for="item in todoList"
        :key="item.id"
      >
        <div class="view">
          <input
            class="toggle"
            type="checkbox"
            :checked="item.done"
            @change="change(item.id)"
          />
          <label @dblclick="edit(item.id, item.name)">{{ item.name }}</label>
          <button class="destroy" @click="del(item)"></button>
        </div>
        <input
          class="edit"
          value="Create a TodoMVC template"
          v-model="editName"
          @keyup.enter="update(item.id)"
          @blur="update(item.id)"
          @keyup.esc="cancel"
        />
      </li>
    </ul>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TodoMain",
  data() {
    return {
      editId: "",
      editName: "",
    };
  },
  methods: {
    del(id) {
      this.$store.commit("del", { id });
    },
    edit(id, name) {
      this.editId = id;
      this.editName = name;
    },
    change(id) {
      this.$store.commit("change", { id });
    },
    update(id) {
      if (this.editId === "") {
        return;
      }
      this.$store.commit("update", { id, name: this.editName });
      this.editId = "";
    },
    cancel() {
      this.editId = "";
    },
	
  },
  // computed:{
  // 	todoList(){
  // 		return
  // 	}
  // }
  // computed:mapState({
  // 	todoList:'todoList'
  // })
  computed:{
	...mapState(["todoList"]),
	follow:{
		get(){
			return this.todoList.every(item=>item.done)
		},
		set(value){
			// console.log(value);
			this.$store.commit('vfollow',{value})
		}
	}
}

};
</script>

<style></style>
