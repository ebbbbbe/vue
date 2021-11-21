<template>
<header class="header">
				<h1>todos</h1>
				<input class="new-todo" placeholder="What needs to be done?" v-model='todoName' @keyup.enter='add' autofocus>
			</header>  
</template>

<script>
export default {
name:'TodoHeader',
data(){
    return{
        todoName:""
    }

},
  

methods: {
    add(){
        this.$store.commit('add',{value:this.todoName})
        this.todoName=''
    }
},

}
</script>

<style>

</style>