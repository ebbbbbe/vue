<template>
<header class="header">
				<h1>todos</h1>
				<input class="new-todo" placeholder="What needs to be done?" v-model.trim='todoName' @keyup.enter='add' autofocus>
			</header>  
</template>

<script>
import {mapMutations} from 'vuex'
export default {
name:'TodoHeader',
data(){
    return{
        todoName:""
    }

},
methods: {
    ...mapMutations(['add1']),
    add(){
        // this.$store.commit('add',{value:this.todoName})
        this.add1({value:this.todoName})
        this.todoName=''
    }
},


}
</script>

<style>

</style>