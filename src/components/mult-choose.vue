<template>
    <div class="chooser-component">
        <ul class="chooser-list">
            <li v-for="(item,index) in selections"  @click="toggle(index)"
            :class="{active:checkActive(index)}"
            >{{item.label}}</li>
        </ul>
    </div>
</template>
<script>
// 引入lodash第三方插件lodash
import _ from 'lodash'
// 这里维护的主要是一个nowIndexes 数组
export default {
     props:{
        selections:{
              type:Array,
              default:'纸质报告'
        }
     },
     data(){
       return {
            nowIndexes:[0]
       }   
     },
     methods:{
    toggle(index){
        // 将选中的tab的index值放到一个数组中
        if(this.nowIndexes.indexOf(index)===-1){ //还不在数组中，就将其push进去
            this.nowIndexes.push(index)
        }else{
            // lodash中的remove()方法的回调函数接收数组中遍历的每一个元素
            this.nowIndexes = _.remove(this.nowIndexes,(idx)=>{
                   return idx !== index
            })
        }
        // 将on-change
    },
    checkActive(index){

           return this.nowIndexes.indexOf(index) !== -1

    }
     }
}
</script>
    
<style scoped>
  .chooser-component {
  position: relative;
  display: inline-block;
}
.chooser-list li{
  display: inline-block;
  border: 1px solid #e3e3e3;
  height: 25px;
  line-height: 25px;
  padding: 0 8px;
  margin-right: 5px;
  border-radius: 3px;
  text-align: center;
  cursor: pointer;
}
.chooser-list li.active {
  border-color: #4fc08d;
  background: #4fc08d;
  color: #fff;
}
</style>
