Vue.component('todo-main',{
    template:`
    <section class="main">
				<input id="toggle-all" class="toggle-all" type="checkbox" v-model='select'>
				<label for="toggle-all" v-model='spare'>Mark all as complete</label>
				<ul class="todo-list">
					<li :class="{completed:item.done,editing:editId === item.id}" v-for='item in todoList'>
						<div class="view">
							<input class="toggle" type="checkbox" :checked='item.done' @change='change(item.id)'>
							<label @dblclick='edit(item.id,item.name)'>{{item.name}}</label>
							<button class="destroy" @click='del(item)'></button>
						</div>
						<input class="edit" value="Create a TodoMVC template" v-model='editName' @keyup.enter='update(item.id)' @blur='update(item.id)' @keyup.esc='cancel'>
					</li>
				</ul>
			</section>
    `,
    props:['todoList'],
    data(){
        return{
            editId:'',
            editName:""
        }
    },
    methods:{
        change(id){
            this.$emit('change',id)
        },
        edit(id,name){
            this.editId= id
            this.editName = name
        },
        update(id){
            if(this.editId === ''){
                return
            }
            this.$emit('update',id,this.editName)
            this.editId = ''
        },
        cancel(){
            this.editId = ''
        },
        del(id){
            this.$emit('del',id)
        }
    },
    computed:{
        select:{
            get(){
                return this.todoList.every(item=>item.done)
            },
            set(value){
                this.$emit('all',value)
            }
        },
        spare(){
            return this.todoList.length
        }
    }
})