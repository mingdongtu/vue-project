<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" 
          v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{userErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" 
          v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{passwordErrors.errorText}}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button"   @click="onLogin">登录</a>
        </div>
      </div>
      <p>{{errorText}}</p>
    </div>
  
  </div>
</template>

<script>
export default {
  data () {
    return {
      usernameModel: '',
      passwordModel: '',
      errorText: ''
    }
  },
  computed:{
       userErrors(){
             let errorText ,status
            if(!/@/g.test(this.usernameModel)){
                 status = false
                 errorText = '不包含@'
            }else{
              status=true
              errorText = ''
            }
            if(!this.userFlag){
                 errorText = ''
                 this.userFlag = true
            }
            return {  //返回一个对象，可以按照es6标准进行简写
                 status,
                 errorText
            }
       },
       passwordErrors(){
             let errorText,status
             if(!/^\w{1,6}$/g.test(this.passwordModel)){
                   status = false
                   errorText ='密码不是1-6位'
             }else{
                  status=true
                  errorText = ''
             }
             if(!this.passwordFlag){
                  errorText = ''
                  this.passwordFlag = true
             }
             return {
               status,
               errorText
             }
             
       }
  },
  methods:{
       onLogin(){
            if(!this.userErrors.status||!this.passwordErrors){
                   this.errorText = '部分选项未通过！'
            }else{
                // 登录成功，将模态框隐藏
                alert('登录成功！')  //注意：这是一个同步的方法
                // this.$emit('on-close') 
                // 调用接口实现登录
                this.$http.get('api/login').then((res)=>{
                  // 注意箭头函数下this的用法：this是继承而来; 默认指向在定义它时所处的对象(宿主对象),而不是执行时的对象
                       this.$emit('has-log',res.data)
                },(error)=>{
                     console.log(error)
                })
            }
       }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
