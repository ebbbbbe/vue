// 1.引入VueRouter
import Vue from "vue";
import VueRouter from "vue-router";

// 2注册路由插件
Vue.use(VueRouter);

import About from "../pages/About.vue";
import Home from "../pages/Home.vue";
import Message from "../pages/Message.vue";
import News from "../pages/News.vue";
import NewsDetail from "../pages/NewsDetail.vue";
import MsgDetail from "../pages/MsgDetail.vue";

// 3.创建路由实例对象
const router = new VueRouter({
  routes: [
    { path: "/about", component: About },
    {
      path: "/home",
      component: Home,
      children: [
        {
          name: "xiangqing1",
          path: "news",
          component: News,
          children: [
            { name: "newsxiangqing", path: "detail", component: NewsDetail ,props:$route=>$route.query},
          ],
        },
        {
          name: "xiangqing",
          path: "message",
          component: Message,
          children: [
            {
              name: "msgxiangqing",
              path: "detail/:id/:title/:content",
              component: MsgDetail,
              props: true,
            },
          ],
        },
      ],
    },
  ],
});

export default router;
