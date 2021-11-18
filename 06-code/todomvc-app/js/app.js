(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	// 在这里面写代码
	Vue.config.productionTip=false;
	new Vue({
		el:'#todoapp',
		data:{
		// 	todoList: [
		// 		{id:1,name:'滑雪',done:false},
		// 		{id:2,name:'游泳',done:false},
		// 		{id:3,name:'打球',done:false},
		// 	]
		todoList:JSON.parse(localStorage.getItem('todoList')) || [],
		},
		methods:{
			// 添加任务项
			add(value){
				if(!value){
					alert('请重新填写')
					return
				}
				this.todoList.unshift({
					id:Date.now(),
					name:value,
					done:false
				})
			},
			// 2.删除任务项
			del(id){
				this.todoList.splice(id,1)	
			},
			residue(){
				// console.log(3);
				this.todoList= this.todoList.filter(item=>!item.done)
			},
			// 清空所有已完成的任务
			checkAll(value){
				this.todoList.forEach(item=>item.done = value)
			},
			// 更新任务状态 完成或未完成
			change(id){
				let item = this.todoList.find(item=>item.id === id)
				item.done = !item.done//因为任务是否完成，只有两种状态，所以此处取反即可
			},
			// 更新任务名称
			update(id,name){
				// 根据id找到更新名称的那一项数据
				let item = this.todoList.find(item=>item.id === id)
				// 更新任务名
				item.name = name
			}
			
		},watch:{
			todoList:{
				handler(newValue){
					localStorage.setItem('todoList',JSON.stringify(newValue))
				},
				deep:true
			}
		}
		
	})

})(window);
