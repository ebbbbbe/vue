<template>
   <ul class="todo-main">
       <TodoItem v-for='item in todoList' :key='item.id' :item='item'>{{item}}</TodoItem>
        
      </ul>
</template>

<script scoped>
import TodoItem from './TodoItem.vue'
export default {
name:"TodoMain",
components:{TodoItem},
props:['todoList']
}
</script>

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>