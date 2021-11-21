<template>
  
  <div class="todo-container">
    <div class="todo-wrap">
      <TodoHeader @add='add'></TodoHeader>
      <TodoMain :todo-list='todoList'></TodoMain>
      <TodoFooter :todo-list='todoList' @completed='completed' @strike='strike'></TodoFooter>
     </div>
  </div>

</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
name:'App',
components:{TodoHeader,TodoMain,TodoFooter},
data(){
  return{
    todoList:[
      {id:1,name:"吃饭",done:false},
      {id:2,name:"踢球",done:false},
      {id:3,name:"碎觉",done:false},
    ]
  }
},
methods:{
  add(value){
    if(!value){
      alert('您输入的是无效的 请重新输入')
      return
    }
    this.todoList.unshift({
      id:Date.now(),
      name:value,
      done:false
    })
  },
  completed(value){
  this.todoList.forEach(item=>item.done = value)
},
strike(){
  console.log(2);
  this.todoList=this.todoList.filter(item=>!item.done)
}
},
mounted(){
  this.$bus.$on('del',id=>this.todoList.splice(id,1))
  this.$bus.$on('change',id=>{
    let item = this.todoList.find(item=>item.id === id)
    item.done = !item.done
  })
},

}
</script>

<style >
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}







</style>