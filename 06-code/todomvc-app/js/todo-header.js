Vue.component('todo-header',{
    template:`
    <header class="header">
		<h1>todos</h1>
		<input class="new-todo" placeholder="What needs to be done?" autofocus v-model='todoName' @keyup.enter='add'>
	</header>
    `,
    data(){
        return{
            todoName:''
        }
    },
    methods:{
        add(){
            this.$emit('add',this.todoName)
            this.todoName=''
        },
    }

}) 