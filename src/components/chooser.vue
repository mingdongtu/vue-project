<template>
    <div class="chooser-component">
          <ul class="chooser-list">
              <li  v-for="(item,index) in selections" @click="cyear(index)"
              :class="{active:index===nowIndex}" >{{item.label}}</li>
          </ul>
    </div>
</template>
<script>
export default {
    props:{
          selections:{
               type:Array,
               default: '半年'
          }
    },
    data(){
      return {
          nowIndex:0
      }
    },
    methods:{
        cyear(index){
            this.nowIndex=index
            // 选择年限，因为年限是个对象
            console.log(this.selections)
            this.$emit('on-change',this.selections[index])
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
