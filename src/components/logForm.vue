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
      <p></p>
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
             return {
               status,
               errorText
             }
             
       }
  },
  methods:{
       onLogin(){
            if(!this.userErrors.status||!this.passwordErrors){
                   alert('用户名或密码器不合格！')
            }
       }
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
