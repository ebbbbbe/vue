import Vue from 'vue' 
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  beforeCreate() {
    Vue.prototype.$bus = this // 注册全局事件总结
  },
  render: h => h(App),
}).$mount('#app')
