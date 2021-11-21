<template>
<footer class="footer" v-show="hide">
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
				<button class="clear-completed" v-show='completed' @click='perfect'>Clear completed</button>
			</footer>
</template>

<script>
import { mapState} from 'vuex'
export default {
name:'TodoFooter',
computed:{
    ...mapState(['todoList']),
    hide(){
        return this.todoList.length
    },
    // 未完成个数
    incomplete(){
        return this.todoList.filter(item=>!item.done).length
    },
    // 
    completed(){
        return this.todoList.some(time=>time.done)
    }
},
methods:{
    perfect(){
        this.$store.commit('perfect')
    }
}
}
</script>

<style>

</style>