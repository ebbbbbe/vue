(function (window) {
  "use strict";

  // Your starting point. Enjoy the ride!
  // 在这里面写代码
  Vue.config.productionTip = false;
  new Vue({
    el: "#todoapp",
    data: {
     /*  todoList: [
        { id: 1, name: "滑雪", done: false },
        { id: 2, name: "游泳", done: false },
        { id: 3, name: "打球", done: false },
      ], */
	  todoList:JSON.parse(localStorage.getItem('todoLiat'))||[],
      editId: "",
    },

    methods: {
      add(value) {
        if (!value) {
          alert("您输入的数据是无效的 请重新输入");
          return;
        }
        this.todoList.unshift({
          id: Date.now(),
          name: value,
          done: false,
        });
      },
      del(id) {
        this.todoList.splice(id, 1);
      },
      edit(id) {
        this.editId = id;
      },
      update() {
        this.editId = "";
      },
      complete() {
        this.todoList = this.todoList.filter((item) => !item.done);
      },
      checkall(value) {
        
        this.todoList.forEach((item) => (item.done = value));
      },
    },
    // 计算属性
    computed: {
      finish() {
        return this.todoList.length;
      },
      rest() {
        return this.todoList.filter((item) => !item.done).length;
      },
      vanish() {
        return this.todoList.some((item) => item.done);
      },
    },
	// 侦听器
	watch:{
		todoList:{
			handler(newValue){
				localStorage.setItem('toodList',JSON.stringify(newValue))
			}
		}
	}
  });
})(window);
