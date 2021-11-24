// 1. 引入VueRouter
import Vue from 'vue'
import VueRouter from 'vue-router'

// 2. 注册路由插件
Vue.use(VueRouter)

import About from '../pages/About.vue'
import Home from '../pages/Home.vue'
import News from '../pages/News.vue'
import Message from '../pages/Message.vue'
import MsgDetail from '../pages/MsgDetail.vue'
import NewsDetail from '../pages/NewsDetail.vue'

// 3. 创建路由实例对象
const router = new VueRouter({
  routes: [
    { path: '/about', component: About },
    {
      path: '/home',
      component: Home,
      children: [
        { path: 'news', 
        component: News ,
        children:[
          {
            name:'newsxiangqing',
            path:'detail',
            component:NewsDetail,
            props:$route=>$route.query
            
          }
        ]
      },
        {
          path: 'message',
          component: Message,
          children: [
            { name:'xiangqing',path:'detail/:id/:title/:content',component:MsgDetail}
          ]
        }
      ]
    },
  ]
})

// 4. 导出后 到main.js中关联vm
export default router