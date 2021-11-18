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
				<button class="clear-completed" v-show='remainder' @click='residue'>Clear completed</button>
			</footer>
    `,
    props:['todoList'],
   computed:{
        size1(){
            // console.log(1);
            return this.todoList.length
        },
        rest(){
            return this.todoList.filter(item=>!item.done).length
        },
        remainder(){
            
            return this.todoList.filter(item=>item.done).length
        }
   },
   methods:{
       residue(){
           this.$emit('residue')
       }
   }
})