import Vue from 'vue'
import App from './App.vue'
// 引入store 
import store from './store/index'
Vue.config.productionTip=false;
// 创建vue实例对象
import {mapState} from 'vuex'
import router from './router'
 const vm = new Vue({
    store,
    router,
    computed:mapState(['todoList']),
    watch:{
        'todoList':{
            deep:true,
            handler(newValue){
                localStorage.setItem('todoList',JSON.stringify(newValue))
            }
        }
    },
   
    render:h=>h(App)
}).$mount('#app')

console.log(vm);