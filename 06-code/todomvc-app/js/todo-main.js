Vue.component('todo-main',{
    template:`
    <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model='checkAll'>
				<label for="toggle-all" v-show='count'>Mark all as complete</label>
				<ul class="todo-list">
					<li :class="{completed:item.done,editing:item.id === editId}" v-for='item in todoList'>
						<div class="view">
							<input class="toggle" type="checkbox" :checked='item.done' @change='change(item.id)'>
							<label @dblclick='edit(item.id,item.name)'>{{item.name}}</label>
							<button class="destroy" @click='del(item)'></button>
						</div>
						<input class="edit" value="Create a TodoMVC template" v-focus v-model='editName' @keyup.enter='update(item.id)'  @blur='update(item.id)' @keyup.esc='cancleEdit'>
					</li>
				</ul>
			</section>
    `,
    props:['todoList'],
    data(){
        return{
            editId:'',
            editName:''
        }
    },
    methods:{
        del(id){
            this.$emit('del',id)
        },
        edit(id,name){
            this.editId=id
            this.editName = name
        },
        update(id){
          if(this.editId === ''){
              return //阻止代码向下执行
          }
          // 不能在这个组件找那个直接修改 此处通知父组件去修改
          this.$emit('update',id,this.editName)
          this.editId=''
        },
        change(id){
          // 触发自定义事件 让父组件进行更新
          this.$emit("change",id)
        },
        // 取消编辑
        cancleEdit(){
          this.editId=''
        }
        

    },
    computed: {
        checkAll: {
          get() {
            return this.todoList.every(item=>item.done)
          },
          set(value) {
            // 通知父组件去更改所有小按钮的状态 保持和总按钮一致
            this.$emit('check-all',value)
          }
        },
        count(){
           return this.todoList.length
        }
      },
      directives:{
        focus(el,binding){
          el.focus()
        }
      }

})