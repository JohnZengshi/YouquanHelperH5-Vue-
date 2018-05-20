import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);
// const goodsDetail = r => require.ensure([], () => r(require('../view/goodsDetail')), 'goodsDetail');
import goodsDetail from '../view/goodsDetail';
const routes = [{
  path: '/goodsDetail',
  component: goodsDetail,
  name: '商品详情'
}];
export default new Router({
  routes,
  strict: process.env.NODE_ENV !== 'production'
});
