import Vue from 'vue'//是阉割版 没有渲染的功能
import App from './App.vue'
// 引入store
import store from './store/index' //store 要小写
Vue.config.productionTip = false //关闭生产提示
// 创建vue实例对象
new Vue({
  // el:"#app"
  store,//和vm关联起来
  render:h=>h(App)
}).$mount('#app')