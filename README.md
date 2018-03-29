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
            
