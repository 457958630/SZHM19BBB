// 引入vue模块
import Vue from 'vue';

// 引入vue 路由模块
import VueRouter from 'vue-router';

// 引入App组件 根节点
import App from './App.vue';

import index from './components/index.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  routes : [
    { path: '/index', component: index }
  ]
})

// 引入css文件
import "./assets/statics/site/css/style.css"

Vue.config.productionTip = false;

const app = new Vue({
  el:"#app",
  router,

  // 渲染 App组件
  render: h => h(App)
})
