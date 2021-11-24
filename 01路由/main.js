// 引入组件
import Vue from 'vue'  // 没有模板渲染的功能
import App from './App.vue'
import router from './router'

 Vue.config.productionTip = false//关闭生产提示
// 创建vue实例对象
// import {mapState} from 'vuex'
const vm = new Vue({
  router,
  render: h=>h(App)
}).$mount('#app')

console.log(vm);