<template>
    <div class="order-wrap">
    <!-- <h3>您的产品</h3> -->
    <div class="order-list-choose">
      <div class="order-list-option">
        选择产品：
        <v-selection :selections="products" @on-change="productChange"></v-selection>
      </div>

      <div class="order-list-option">
        开始日期：
       <v-picker :readonly="true" format="YYYY-MM-DD"  @change="changeStartDate"></v-picker>

      </div>

      <div class="order-list-option">
        结束日期：
      <v-picker :readonly="true" format="YYYY-MM-DD" @change="changeEndDate"></v-picker>
      </div>

      <div class="order-list-option">
        关键词：
        <input type="text" v-model.lazy="query" class="order-query">
      </div>
    </div>
    <div class="order-list-table">
      <table>
        <tr>
          <th v-for = 'head in tableHeads'> {{head.label}}</th>
        </tr>
        <tr >
          <td  v-for="item in list">{{item.product}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>
   
<script>
//引入下拉选择组件
import VSelection from '../components/selection'
// 引入时间选择组件,下面是直接将npm中注册的组件拿出来放在自己建立的vue组件中
import VPicker from '../components/datepicker'

export default {
    components:{
         VSelection,
         VPicker
    },
     data(){
         return {
             query:'',
             productId:0,
             startDate:'',
             endDate:'',
              list: [
      {
      orderId: "ddj123",
      product: "数据统计",
      version: "高级版",
      period: "1年",
      buyNum: 2,
      date: "2016-10-10",
      amount: "500元"
      },
      {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
      },
      {
      orderId: "pmd201",
      product: "广告发布",
      version: "商铺版",
      period: "3年",
      buyNum: 12,
      date: "2016-8-3",
      amount: "7890元"
      },
       {
      orderId: "ddj123",
      product: "数据统计",
      version: "高级版",
      period: "1年",
      buyNum: 2,
      date: "2016-10-10",
      amount: "500元"
      },
      {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
      },
       {
      orderId: "ddj123",
      product: "数据统计",
      version: "高级版",
      period: "1年",
      buyNum: 2,
      date: "2016-10-10",
      amount: "500元"
      },
      {
      orderId: "yuj583",
      product: "流量分析",
      version: "户外版",
      period: "3个月",
      buyNum: 1,
      date: "2016-5-2",
      amount: "2200元"
      }
      
    ],
      tableHeads: [
        {
          label: '订单号',
          key: 'orderId'
        },
        {
          label: '购买产品',
          key: 'product'
        },
        {
          label: '版本类型',
          key: 'version'
        },
        {
          label: '有效时间',
          key: 'period'
        },
        {
          label: '购买日期',
          key: 'date'
        },
        {
          label: '数量',
          key: 'buyNum'
        },
        {
          label: '总价',
          key: 'amount'
        }
      ],
  products: [
        {
          label: '数据统计',
          value: 0
        },
        {
          label: '数据预测',
          value: 1
        },
        {
          label: '流量分析',
          value: 2
        },
        {
          label: '广告发布',
          value: 3
        }
      ],
         }
     },
     methods:{
         productChange(obj){
            this.productId=obj.value
            this.getTableData()
         },
         changeStartDate(date){
               this.startDate = date
               this.getTableData()
         },
         changeEndDate(date){
               this.endDate = date
               this.getTableData()
         },
         getTableData(){
             let reqParam={
                   query:this.query,
                   productId:this.productId,
                   startDate:this.startDate,
                   endDate:this.endDate
             }
               this.$http.post('/api/getOrderList',reqParam)
               .then(()=>{
                     this.tableData = res.data.list
               },(err)=>{
                     
               })
         }
     },
     watch:{
        //  query变化的时候执行
         query(){
             console.log('querry change!')
         }
     },
     mounted(){
           this.getTableData()
     }
}
</script>

<style scoped>
.order-wrap {
  width: 1200px;
  min-height: 800px;
  margin: 20px auto;
  overflow: hidden;
}
.order-wrap h3 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}
.order-query {
  height: 25px;
  line-height: 25px;
  border: 1px solid #e3e3e3;
  outline: none;
  text-indent: 10px;
}
.order-list-option {
  display: inline-block;
  padding-left: 15px;
}
.order-list-option:first-child {
  padding-left: 0;
}
.order-list-table {
  margin-top: 20px;
}
.order-list-table table {
  width: 100%;
  background: #fff;
}
.order-list-table td,
.order-list-table th {
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 10px 0;
}
.order-list-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
  cursor: pointer;
}
.order-list-table th.active {
  background: #35495e;
}
</style>
