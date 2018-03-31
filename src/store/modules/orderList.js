// 数据中心
import Vue from 'vue'
const state = {  //存放数据
    // 请求回来的数据
    // orderList,
    // 请求参数
    params:{}
}
const getters = {  //调用state里面的值的，因为页面无法直接获取state里面的数据
    getOrderList:state =>  state.orderList
    
}
const actions = { //可以进行异步操作的动作
//   异步通过api获取
fetchOrderList({commit,state}){
    // commit 是用来调用mutation的，state是用来获取状态集里面的数据
  Vue.http.post('api/getOrderList',state.params)
  .then((res)=>{
       commit('updateOrderList',res.data.list)
        // state.orderList = res.data.list
        // state.total = res.data.total
  })
}
}
const mutations = {  //只能是同步的对状态的更改,严格上来说，只准mutation里对state进行修改，而不准action里修改state
//    首先设置一个同步的动作
updateOrderList(state,payLoad){
      state.orderList = payLoad
}
}
export default {
      state,
      getters,
      actions,
      mutations
}