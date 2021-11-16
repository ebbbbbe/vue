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
			todoList:JSON.parse(localStorage.getItem('todoList')) || [] ,
			dotoName:"",
			editId:""
		},
		methods:{
			// 增加项目
			add(){
				if(!this.dotoName){
					alert('您输入的是无效的 请重新输入')
					return
				}
				this.todoList.unshift({
					id:Date.now(),
					name:this.dotoName,
					done:false
				}),
				this.dotoName=''
			},
			// 删除项目
			del(id){
				this.todoList.splice(id,1)
			},
			// 修改项目
			put(id){
				this.editId = id
			},
			// 更新数据
			update(){
				this.editId=''
			},
			//删除完成
			finish(){
				 this.todoList=this.todoList.filter(item=>!item.done)
			}
		},
		// 计算属性
		computed:{
			size(){
				return this.todoList.length
			},
			incomplete(){
				return this.todoList.filter(item=>!item.done).length
			},
			evanescent(){
				return this.todoList.some(item=>item.done)
			},
			checkAll:{
				get(){
					return this.todoList.every(item=>item.done)
				},
				set(value){
					this.todoList.forEach(item=>item.done= value)
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

		
	});

})(window);
