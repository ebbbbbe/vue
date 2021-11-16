(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	// 在这里面写代码
	new Vue({
		el:'#todoapp',
		data:{
			todoList: [
				{id:1,name:'滑雪',done:false},
				{id:2,name:'游泳',done:false},
				{id:3,name:'打球',done:false},
			],
			todoName:'',
			editId:''
		},
		methods:{
			add(){
				if(!this.todoName){
					return;
				}
				this.todoList.unshift({
					id:Date.now(),name:this.todoName,done:false
				})
				this.todoName=''

			},
			del(item){
				this.todoList.splice(item,1)
				// this.todoList.slice(id)
				// this.todoList= this.todoList.filter(item=>item.id !== id);
				// console.log(this.todoList.slice(id));
			},
			edit(id){
				this.editId= id;
			},
			update(){
				this.editId=''
			},
			clear(){
				this.todoList= this.todoList.filter(item=>!item.done)
			}
			

		},
		computed:{
			isShowClearComplted(){
				return this.todoList.filter(item=>item.done).length > 0
			}
		}
	})

})(window);
