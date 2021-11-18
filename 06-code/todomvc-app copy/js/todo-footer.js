Vue.component('todo-footer',{
    template:`
    <footer class="footer" v-show='size1'>
    <span class="todo-count"><strong>{{rest}}</strong> item left</span>
    <ul class="filters">
        <li>
            <a class="selected" href="#/">All</a>
        </li>
        <li>
            <a href="#/active">Active</a>
        </li>
        <li>
            <a href="#/completed">Completed</a>
        </li>
    </ul>
    <button class="clear-completed" v-show='remainder' @click='compeletd'>Clear completed</button>
</footer>
    `,
    props:['todoList'],
    computed:{
        size1(){
            return this.todoList.length
        },
        rest(){
            return this.todoList.filter(item=>!item.done).length
        },
        remainder(){
            return this.todoList.some(item=>item.done)
        }
    },
    methods:{
        compeletd(){
            this.$emit('compeletd')
        }
    }
}) 