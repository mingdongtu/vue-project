import Vuex from 'vuex'
import Vue from 'vue'

import orderList from './modules/orderList'

Vue.use(Vuex)
export default new Vuex.Store({
    modules:{
            orderList
      }
})
// 将导出的是一个store实例
