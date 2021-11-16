(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	// 在这里面写代码

	Vue.config.productionTip=false;
	new Vue({
		el:'#todoapp',
		data:{
			// todoList: [
			// 	{id:1,name:'滑雪',done:false},
			// 	{id:2,name:'游泳',done:false},
			// 	{id:3,name:'打球',done:false},
			// ],
			todoList:JSON.parse(localStorage.getItem('todoList')) || [],
			todoName:"",
			editId:''
		},
		methods:{
			// 添加项目
			add(){
				if(!this.todoName){
					alert('您输入的无效的 请重新输入')
					return
				}
				this.todoList.unshift({
					id:Date.now(),
					name:this.todoName,
					done:false
				})
			},
			// 修改项目
			edi(id){
				this.editId = id
			},
			// 添加新数据
			update(){
				this.editId=''
			},
			//删除项目
			del(id){
				this.todoList=this.todoList.filter(item=>item.id !== id)
			},
			// 删除完成项
			cut(){
				this.todoList= this.todoList.filter(item=>!item.done)
			}
		},
		// 计算属性
		computed:{
			size(){
				return this.todoList.length
			},
			immature(){
				return this.todoList.filter(item=>!item.done).length
			},
			hide(){
				return this.todoList.some(item=>item.done)
			},
			checkAll:{
				get(){
					return this.todoList.every(item=>item.done)
				},
				set(value){
					this.todoList.forEach(item=>item.done = value)
				}
			}
		},
		// 侦听器
		watch:{
			todoList:{
				handler(newValue){
					localStorage.setItem('todoList',JSON.stringify(newValue))
				},
				deep:true
			}
		}
	})

})(window);
