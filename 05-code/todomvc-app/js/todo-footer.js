Vue.component('todo-footer',{
    template:`
    <footer class="footer" v-show='finish'>
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
				<button class="clear-completed" @click='complete' v-show='vanish'>Clear completed</button>
			</footer>
    `,
	props:['finish','rest','vanish'],
	methods:{
		complete(){
			this.$emit('complete')
		}

	}

	
}) 