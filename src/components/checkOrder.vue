<!--
放置3个相同的组件
-->
<template>
  <div>
    <this-dialog :is-show="isShowCheckDialog" @on-close="onHide" >
      <div slot="mySlot">
            请检查你的支付状态！
      <div class="button" @click="checkStatus" >
        支付成功
      </div>
      <div class="button"  @click="checkStatus">
        支付失败
      </div>
      </div>
    </this-dialog>
    
    <this-dialog :is-show="isShowSuccessDialog"  @on-close="onHide">
      <div slot="mySlot"> 购买成功！</div>
    </this-dialog>
    <this-dialog :is-show="isShowFailDialog"  @on-close="onFail">
       <div slot = 'mySlot'> 购买失败！</div>
    </this-dialog>
  </div>
</template>
<script>
import Dialog from './dialog'
export default {
         components:{
                thisDialog:Dialog
         },
         props:{
           isShowCheckDialog:{
                type:Boolean,
                default: false
           }
         },
         data(){
              return {
                 isShowSuccessDialog:false,
                 isShowFailDialog:false
              }
         },
         methods:{
              onHide(){
                   this.isShowSuccessDialog=false 
                    console.log('你好！')
                   this.$router.push({
                       path:'/orderList'
                   }) 
              },
              onFail(){
                  this.isShowFailDialog=false
                  console.log('你好！')
                    this.$router.push({
                       path:'/orderList'
                   })
                
              },
              checkStatus(){
                // 调用检查订单状态的接口
                this.$http.post('/api/checkOrder',{
                    orderId:this.orderId
                }).then((res)=>{
                      this.isShowSuccessDialog=true
                      this.$emit('on-close-check-dialog')
                },(err)=>{
                       this.isShowFailDialog=true
                       this.$emit('on-close-check-dialog')
                })
              }
         }
       
}
</script>

<style scoped>

</style>

