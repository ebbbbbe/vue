<template>
   <div class="todo-footer" v-show='total'>
        <label>
          <input type="checkbox" v-model='completed'/>
        </label>
        <span>
          <span >已完成{{finished}}</span> / 全部{{total}}
        </span>
        <button class="btn btn-danger" v-show='all' @click='strike'>清除已完成任务</button>
      </div>
</template>

<script>
export default {
name:'TodoFooter',
props:['todoList'],
computed:{
	total(){
	return this.todoList.length
	},
	finished(){
		return this.todoList.filter(item=>item.done).length
	},
	completed:{
		get(){
			return this.todoList.every(item=>item.dome)
		},
		set(value){
			this.$emit('completed',value)
		}
	},
	all(){
		return this.todoList.some(item=>item.done)
	}
},
methods:{
strike(){
	console.log(666);
	this.$emit('strike')
}
}
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>