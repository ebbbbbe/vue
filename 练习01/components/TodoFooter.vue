<template>
<footer class="footer" v-show='size'>
				<!-- This should be `0 items left` by default -->
				<span class="todo-count"><strong>{{incomplete}}</strong> item left</span>
				<!-- Remove this if you don't implement routing -->
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
				<!-- Hidden if no completed items are left ↓ -->
				<button class="clear-completed" v-show='screen' @click='clear'>Clear completed</button>
			</footer>
</template>

<script>

import { mapState } from 'vuex'
export default {
name:'TodoFooter',
computed:{
    ...mapState(['todoList']),
    size(){
       return this.todoList.length
    },
    incomplete(){
        return this.todoList.filter(item=>!item.done).length
    },
    screen(){
        return this.todoList.some(item=>item.done)
    }
},
methods:{
    clear(){
        this.$store.commit('clear')
    }
}
}
</script>

<style>

</style>