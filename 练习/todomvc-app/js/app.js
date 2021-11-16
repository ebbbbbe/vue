(function (window) {
  "use strict";

  // Your starting point. Enjoy the ride!
  // 在这里面写代码
  Vue.config.productionTip = false; //关不生产提示
  new Vue({
    el: "#todoapp",
    data: {
      // todoList: [
      //   { id: 1, name: "滑雪", done: false },
      //   { id: 2, name: "游泳", done: false },
      //   { id: 3, name: "打球", done: false },
      // ],
      todoList:JSON.parse(localStorage.getItem('todoList')) || [],
      todoName: "",
	  editId:""
    },
    methods: {
		// 添加新任务
      add() {
		  if(!this.todoName){
			  alert('您输入的内容不能为空，请重新输入')
			  return //阻止代码的向下执行
		  }
        this.todoList.unshift({
          id: Date.now(),
          name: this.todoName,
          done: false,
        }),
          this.todoName = ""
      },
	//   2，删除任务
	  del(id){
		  this.todoList.splice(id,1)
		//   this.todoList=this.todoList.filter(item=>item.id !== id)
	  },
	//   3，编辑任务 其实就是先变成可编辑的状态
	  edit(id){
		  this.editId= id
	  },
	//   4。编辑完成后更新数据
	update(){
		// 就是将编辑完成的数据显示在页面
		// 然后让当前的可编辑状态变成一个正常状态
		this.editId=''
	},
  //5. 清空所有的已完成项
  clear(){
    this.todoList= this.todoList.filter(item=>!item.done)
  }
    },
    // 计算属性
    computed:{
      // 计算属性：就是用原来已经存在的数据经过计算而得到的新数据
      isShowFooter(){
        return this.todoList.length
      },
      leftCount(){
        return this.todoList.filter(item=>!item.done).length
      },
      isShowClearComplelted(){
        return this.todoList.some(item=>item.done)
      },
      checkAll:{
        get(){
          // every都是true才完成
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
  });
})(window);
