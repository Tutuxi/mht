import 'vant/lib/index.css';

import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant';
Vue.use(Vant);

import VueRouter from 'vue-router';
Vue.use(VueRouter)

Vue.config.productionTip = false;

// 创建组件
import login from './components/login.vue';
import goods from './components/goods.vue';
import code from './components/code.vue';
import myGoods from './components/myGoods.vue';
import give from './components/give.vue';
import index from './components/index.vue';
import receive from './components/receive.vue';

// 配置路由
const routes = [
  { path: '/login', component: login },
  { path: '/goods', component: goods},
  { path: '/code', component: code},
  { path: '/myGoods', component: myGoods},
  { path: '/give', component: give},
  { path: '/index', component: index},
  { path: '/receive', component: receive},
  
  { path: '*', redirect: '/login' }   /*默认跳转路由*/
]

// 实例化VueRouter 
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
