// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import OrderListPage from './pages/orderList'
// 将数据中心引入进来
import store from './store/index'
/* eslint-disable no-new */
Vue.use(VueRouter)
// VueResource 不需要其他的配置，这个也是全局的通过this.$http
Vue.use(VueResource)
// 实例化vue-router
let router = new VueRouter({
       mode:"history",
       routes:[
        {
          path: '/',
          component:IndexPage
     },
     {
      path: '/orderList',
      component:OrderListPage
 },
   {
    path:'/detail',
    redirect:'/detail/analysis',
    component: DetailPage,
    children:[
      {
        path:'analysis',
        component:DetailAnaPage 
    },
    {
      path:'count',
      component:DetailCouPage    
  },
  
      {
          path:'forecast',
          component:DetailForPage  
      },
      {
        path:'publish',
        component:DetailPubPage  
    },
    ]
   }

       ]
})
//全局的路由和状态管理
let myvue=new Vue({
  el: '#app',
  router,
  store,
  template: '<Layout/>',
  components: {
     Layout: Layout }
})
console.log(myvue)
