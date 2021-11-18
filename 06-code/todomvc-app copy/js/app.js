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
		todoList:JSON.parse(localStorage.getItem('todoList')) || []
		},
		methods:{
			// 添加项目
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
			// 删除项目
			del(id){
				this.todoList.splice(id,1)
			},
			// 删除完成项目
			compeletd(){
				this.todoList= this.todoList.filter(item=>!item.done)
			},
			checkAll(value){
				this.todoList.forEach(item=>item.done=value)
			},
			change(id){
				let item = this.todoList.find(item=>item.id === id)
				item.done = !item.done
			},
			update(id,value){
				let item = this.todoList.find(item=>item.id === id)
				item.name = value
			}
		},
		watch:{
			todoList:{
				handler(newValue){
					localStorage.setItem('todoList',JSON.stringify(newValue))
				}
			}
		}
		
	})

})(window);
