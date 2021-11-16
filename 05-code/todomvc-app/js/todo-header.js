Vue.component('todo-header',{
    template:`
    <header class="header">
		<h1>todos</h1>
		<input class="new-todo" @keyup.enter='add' v-model.trim='todoName' placeholder="What needs to be done?" autofocus>
	</header>
    `,
    data(){
        return{
            todoName:''
        }
    },
    methods:{
        add(){
            // 发送数据给父组件
            this.$emit('add',this.todoName)
            this.todoName=''
        }
    }
})