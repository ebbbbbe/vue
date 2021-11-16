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
			editId:""
		},
		methods:{
			// 添加任务
			add(){
				if(!this.todoName){
					alert("您输入的内容不能为空，请输重新输入")
					return
				}
				this.todoList.unshift({
					id:Date.now(),
					name:this.todoName,
					done:false
				}),
				this.todoName=""

			},
			// 删除任务项
			del(id){
				 this.todoList=this.todoList.filter(item=>item.id !== id)
			},
			// 编辑任务 就是变成可编辑状态
			edit(id){
				this.editId = id
			},
			// 编辑完成后更新数据
			update(){
				this.editId=''
			},
			// 清空所有的已完成项
			clear(){
				this.todoList= this.todoList.filter(item=>!item.done)
			}
		},
		// 计算属性
		computed:{
			idShowFoorter(){
				return this.todoList.length
			},
			leftCount(){
				return this.todoList.filter(item=>!item.done ).length
			},
			isShowClearComplelted(){
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
		// 监听器
		watch:{
			todoList:{
					handler(newValue){
						localStorage.setItem('tosoList',JSON.stringify(newValue))
					},
					deep:true
				
			}
		}
	})

})(window);
