<template>
<header class="header">
	<h1>todos</h1>
	<input class="new-todo" @keyup.enter='add' v-model.trim='todoName' placeholder="What needs to be done?" autofocus>
</header>
</template>

<script>
export default {
name:'TodoHeader',
data(){
    return{
        todoName:''
    }
},
methods:{
    add(){
        this.$store.commit('add',{name:this.todoName})
    }
}
}
</script>

<style>

</style>