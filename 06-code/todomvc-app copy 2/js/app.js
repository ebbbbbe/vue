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
			]
		}
	})

})(window);
