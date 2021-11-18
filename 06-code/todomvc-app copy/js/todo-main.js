Vue.component('todo-main',{
    template:`
    <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model='select'>
    <label for="toggle-all" v-show='rest'>Mark all as complete</label>
    <ul class="todo-list">
        <li :class="{completed:item.done,editing:item.id === editId}" v-for='item in todoList'>
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
            editName:''
        }
    },
    methods:{
        edit(id,name){
            this.editId = id
            this.editName = name
        },
        update(id){
            if(this.editId === ''){
                return
            }
            this.$emit('update',id,this.editName)
            this.editId = ''

        },
        // 删除项目
        del(id){
            this.$emit('del',id)
        },
        change(id){
            // this.editDone=done
            this.$emit('change',id)
        },
        cancel(){
            this.editId=''
        }

       
    },
    computed:{
        select:{
            get(){
                return this.todoList.every(item=>item.done)
            },
            set(value){
                this.$emit('check-all',value)
            }
        },
        rest(){
            return this.todoList.length
        }
    }
  
}) 