<!--这个是根组件-->
<template>
<!--注意:每个组件只有一个统一的根节点-->
    <div >
        <div class="app-head">
              <div class="app-head-inner">
                
                <router-link :to="{path:'/'}"> 
                  <img src="../assets/logo.png" alt="">
                 </router-link>
                 
                 <div class="head-nav">
                       <ul class="nav-list">
                            <li>{{userName}}</li>
                            <li class="nav-pile"  v-if="userName!==''">|</li>
                            <li @click="quit"  v-if="userName!==''" >退出</li>
                            <li @click="logClick"  v-if="userName===''">登录</li>
                            <li class="nav-pile"   v-if="userName===''">|</li>
                            <li @click="regClick"  v-if="userName===''">注册</li>
                            <li class="nav-pile"   v-if="userName===''">|</li>
                            <li @click="aboutClick">关于</li>
                       </ul>
                 </div>
              </div>
        </div>
        <div class="app-content">
          
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
               
        </div>
        <div class="app-foot">@ 2016 this Tu Ming Dong's project!</div>
        <!-- 监听关闭模态框的的事件，一个自定义事件绑定一个具体方法 -->
         
        
        <my-dialog  :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
            <p slot='mySlot'>3333333333333333333333333333</p>    
        </my-dialog> 
        <!--:冒号绑定自定义属性，用于向子组件传递数据；@绑定自定义事件，用于像子组件传递事件 -->
         <my-dialog  :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
           <!-- 这里若log-form组件里面添加了slot标签的name属性，这里的slot属性就不能少 -->
            <log-form slot='mySlot' @on-close="closeDialog('isShowLogDialog')"  @has-log="onSuccess"></log-form>   
        </my-dialog>
         <my-dialog  :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
            <reg-form slot='mySlot'></reg-form>  
        </my-dialog>
    </div>
</template>
<script>
// 引入登录弹窗这个子组件
import Dialog from "./dialog"
import LogForm from './logForm'
import regForm from './regForm'
export default {
  components:{
        MyDialog:Dialog,
        LogForm:LogForm,
        regForm:regForm
      },
      data(){
            return {
                isShowAboutDialog:false,
                isShowLogDialog:false,
                isShowRegDialog:false,
                userName:''
            }
      },
      methods:{
           aboutClick(){
                this.isShowAboutDialog=true
           },
           logClick(){
                this.isShowLogDialog=true
           },
           regClick(){
            this.isShowRegDialog=true
           },
           closeDialog(attr){
                this[attr]=false
                
           },
           onSuccess(data){
             this.userName=data.name
             this.closeDialog('isShowLogDialog')
           }
      }
}
</script>


<style>
/* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
  display: block;
}
body {
  line-height: 1;
}
ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
a {
  color: inherit;
  text-decoration: none;
}
body {
  background: #f0f2f5;
  font-family: "Helvetica Neue",Helvetica,Arial,"Hiragino Sans GB","Hiragino Sans GB W3","Microsoft YaHei UI","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
  font-size: 14px;
  color: #444;
}
.app-head {
  background: #363636;
  color: #b2b2b2;
  height: 90px;
  line-height: 90px;
  width: 100%;
}
.app-head-inner {
  width: 1200px;
  margin: 0 auto;
}
.head-logo {
  float: left;
}
.app-head-inner img {
  width: 50px;
  margin-top: 20px;
}
.head-nav {
  float: right;
}
.head-nav ul {
  overflow: hidden;
}
.head-nav li {
  cursor: pointer;
  float: left;
}
.nav-pile {
  padding: 0 10px;
}
.app-foot {
  text-align: center;
  height: 80px;
  width: 100%;
  line-height: 80px;
  background: #e3e4e8;
  clear: both;
  margin-top: 30px;
}
.container {
  width: 1200px;
  margin: 0 auto;
}
.hr {
  height: 1px;
  width: 100%;
  background: #ddd;
}
.button {
  background: #4fc08d;
  color: #fff;
  display: inline-block;
  padding: 10px 20px;
  cursor: pointer;
}
.button:hover {
  background: #4fc08d;
}
.g-form {

}
.g-form-line {
  padding: 15px 0;
}
.g-form-label {
  width: 100px;
  font-size: 16px;
  display: inline-block;
}
.g-form-input {
  display: inline-block;
}
.g-form-input input {
  height: 30px;
  width: 200px;
  line-height: 30px;
  vertical-align: middle;
  padding: 0 10px;
  border: 1px solid #ccc;
}
.g-form-btn {
  padding-left: 100px;
}
.g-form-error {
  color: red;
  padding-left: 15px;
}
</style>
