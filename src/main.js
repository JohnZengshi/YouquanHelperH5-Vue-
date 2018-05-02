// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import goodsDetail from './view/goodsDetail';
import './common/stylus/index.styl';
import './common/js/init.js';
// 通过全局方法 Vue.use() 使用插件
Vue.use(VueRouter);
let routes = [{
    path: '/',
    component: App
  },
  {
    path: '/goodsDetail',
    component: goodsDetail
  }
];
let router = new VueRouter({
  'linkActiveClass': 'active',
  routes // （缩写）相当于 routes: routes
});
let app = new Vue({
  router
}).$mount('#app');
// router.push('/goods');
export default app;
