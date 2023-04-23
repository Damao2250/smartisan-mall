import Vue from 'vue'
import Router from 'vue-router'
const Index = resolve => require(['@/views/index'], resolve)
const Login = resolve => require(['@/views/Login/login'], resolve)
const Home = resolve => require(['@/views/Home/home'], resolve)
const GoodS = resolve => require(['@/views/Goods/goods'], resolve)
const goodsDetails = resolve => require(['@/views/Goods/goodsDetails'], resolve)
const Cart = resolve => require(['@/views/Cart/cart'], resolve)
const order = resolve => require(['@/views/Order/order'], resolve)
const user = resolve => require(['@/views/User/user'], resolve)
const orderList = resolve => require(['@/views/User/children/order'], resolve)
const information = resolve => require(['@/views/User/children/information'], resolve)
const addressList = resolve => require(['@/views/User/children/addressList'], resolve)
const coupon = resolve => require(['@/views/User/children/coupon'], resolve)
const aihuishou = resolve => require(['@/views/User/children/aihuishou'], resolve)
const support = resolve => require(['@/views/User/children/support'], resolve)
const checkout = resolve => require(['@/views/Checkout/checkout'], resolve)
const payment = resolve => require(['@/views/Order/payment'], resolve)
const paysuccess = resolve => require(['@/views/Order/paysuccess'], resolve)
Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      name: 'index',
      redirect: '/home',
      children: [
        {path: 'home', component: Home},
        {path: 'goods', component: GoodS},
        {path: 'goodsDetails', name: 'goodsDetails', component: goodsDetails}
      ]
    },
    {path: '/login', name: 'login', component: Login},
    {path: '/cart', name: 'cart', component: Cart},
    {
      path: '/order',
      name: 'order',
      component: order,
      children: [
        {path: 'paysuccess', name: 'paysuccess', component: paysuccess},
        {path: 'payment', name: 'payment', component: payment}
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: user,
      redirect: '/user/orderList',
      children: [
        {path: 'orderList', name: '订单列表', component: orderList},
        {path: 'information', name: '账户资料', component: information},
        {path: 'addressList', name: '收货地址', component: addressList},
        {path: 'coupon', name: '我的优惠', component: coupon},
        {path: 'support', name: '售后服务', component: support},
        {path: 'aihuishou', name: '以旧换新', component: aihuishou}
      ]
    },
    {path: '/checkout', name: 'checkout', component: checkout},
    {path: '*', redirect: '/home'}
  ]
})
