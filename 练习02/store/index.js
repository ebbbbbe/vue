// 1.先引入插件
import Vue from 'vue'
import Vuex from 'vuex'
// 注册插件
Vue.use(Vuex)

// const mutations={
//     // 改变done状态
//     change(state,payload){
//         let item = state.todoList.find(item=>item.id === payload)
//         item.done = !item.done
//     },
//     // 删除项目
//     del(state,payload){
//         state.todoList.splice(payload,1)
//     },
//     // 更新新数据
//     update1(state,payload){
//         let item = state.todoList.find(item=>item.id === payload.id)
//         item.name = payload.name
//     },
//     // 全选
//     select(state,payload){
//         state.todoList.forEach(item=>item.done = payload.value)
//     },
//     // 添加
//     add1(state,payload){
//         if(!payload.value){
//             alert('请重新输入')
//             return
//         }
//         state.todoList.unshift({
//             id:Date.now(),
//             name:payload.value,
//             done:false
//         })
//     },
//     // 删除完成项
//     clear(state){
//         state.todoList=state.todoList.filter(item=>!item.done)
//     }
// }

import actions from './actions'
import getters from './getters'
import mutations from './mutations'
import state from './state'

// 3.创建store实例对象并准备子项
const store = new Vuex.Store({
    strcit:true,//开启严格模式
    state,
    mutations,
    getters,
    actions
})
export default store