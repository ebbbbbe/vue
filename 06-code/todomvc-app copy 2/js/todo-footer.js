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
				<button class="clear-completed" v-show='hidden' @click='cut' >Clear completed</button>
			</footer>
    `,
    props:['todoList'],
    computed:{
        // 剩余长度
        size1(){
            return this.todoList.length
        },
        // 未完成个数
        rest(){
            return this.todoList.filter(item=>!item.done).length
        },
        // 显示与隐藏
        hidden(){
            return this.todoList.some(item=>item.done)
        }
    },
    methods:{
        cut(){
            this.$emit('cut')
        }
    }
}) 