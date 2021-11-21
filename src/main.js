import Vue from 'vue'
import App from './App.vue'
// 引入store 
import store from './store/index'
Vue.config.productionTip=false;
// 创建vue实例对象
new Vue({
    store,
    render:h=>h(App)
}).$mount('#app')