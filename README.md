# vue-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# 关于父组件向子组件传递数据以及方法
 冒号绑定自定义属性，用于向子组件传递数据；@绑定自定义事件，用于像子组件传递事件 

#router-link组件有一个tag属性，增强了该组件渲染的灵活性

#在js里面引用图片，需要使用require()方法来引入，否则就会被当成一个字符串，无法完成渲染

#如果我们不想用户访问某个路由下面的路径，可以使用redirect重定向，自动跳转到指定页面

#this.$emit('on-change',this.number) 由里而外触发父组件对应自定义事件的方法

#在引入的组件里面插入内容，首先需要在被引用的组件里面添加slot标签 给予name属性，然后在父组件里面在要插入的内容最外层标签添加slot属性

#注意：vue-resource 引入后使用use()方法后就不需要再进行其他配置

#注意：对vue进行实例化的时候里面的参数不能包含大写
new Vue({
  el: '#app',
  router,
  Store,
  template: '<Layout/>',
  components: { Layout }
})
上面“Store”就是错误的写法

#使用export default命令，为模块指定默认输出，这样就不需要知道所要加载模块的变量名

#提交到vuex分支

#vue-router 和 vue-resource 在入口文件里面进行全局配置，其中vue-resource 在调用Vue.use()方法后不需要再传到vue实例里

#页面初次加载的时候，若当前页面存在路由，就要在入口文件main.js中配置开始页面，后期点击切换页面的时候，基于开始页面在入口文件main.js里面配置, 对于嵌套路由使用children配置

            
