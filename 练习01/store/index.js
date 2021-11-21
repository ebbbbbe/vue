// 1.先引入插件
import Vue from 'vue'
import Vuex from 'vuex'
// 2.注册插件
Vue.use(Vuex)
const state ={
    todoList: [
        {id:1,name:'滑雪',done:false},
        {id:2,name:'游泳',done:false},
        {id:3,name:'打球',done:false},
    ] || []
}
const mutations = {
    // 1.添加任务项
    add(state,payload){
        if(!payload.name){
            alert('您输入的是无效的数据 请重新输入')
            return
        }
        state.todoList.unshift({
            id:Date.now(),
            name:payload.name,
            done:false
        })
    },
    // 2.删除项目
    del(state,payload){
        state.todoList.splice(payload,1)
    },
    // 3.改变项目状态
    change(state,payload){
        let item = state.todoList.find(item=>item.id === payload.id)
        item.done = !item.done
    },
    // 改变数据内容
    update(state,payload){
        let item = state.todoList.find(item=>item.id === payload.id)
        item.name = payload.name
    },
    // 全选按钮
    vfollow(state,payload){
        // console.log(value);
        state.todoList.forEach(item=>item.done =payload.value)
    },
    // 清除完成项目
    clear(state){
        state.todoList=state.todoList.filter(item=>!item.done)
    }
}
// 3.创建store实例对象并准备子项
const store = new Vuex.Store({
    strcit:true,//开启严格模式
    state,
    mutations
})


// 4.导出
export default store