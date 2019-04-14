<!--vuecli知识总结
  搭建交互式项目手脚架
-->
<!---->
<!--总组件（最外层，引用总组件）
spa：单页面应用
渲染到public/index.js的方法：   通过main.js
组件在router-view中渲染，该标签用作占位
-->
<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <!--router-link 解析后，是个a标签，to等于href-->
<!--例8：组件复用时的钩子函数-->
      <router-link to="/about/1">About</router-link>|
      <router-link to="/about/2">About</router-link>|
<!--例1：添加链接-->
      <router-link to="/mine">Mine</router-link>|
      <!-- router-link to 对应路由里面的path-->
<!---->
<!--例2：子路由-->
      <!--<router-link to="/mine/test1">子路由1</router-link>|-->
      <!--<router-link to="/mine/test2">子路由2</router-link>|-->
      <!--是mine的子路由，就要在mine的template里写一个router-view-->
<!---->
<!--例3：参数传递 写成对象结构-->
      <router-link :to="{name:'test1',params:{name:'yaozhilin',age:25}}">子路由1</router-link>|
      <router-link to="/mine/test2/zhangsan/12">子路由2</router-link>|
<!---->
<!--例4：重定向-->
      <router-link to="/home">重定向</router-link>|
      <!--带参数-->
      <router-link to="/home/songli/49">重定向带参数</router-link>|
<!---->
<!--例5：别名-->
      <router-link to="/yzl">别名</router-link>|
<!---->
<!--例9：编程式导航-->
      <router-link to="/movie">电影列表</router-link>|
<!---->
    </div>
<!--例6：路由过渡动画-->
      <transition name="fade">
          <router-view/>
      </transition>
<!---->
    <!--<router-view/>-->
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
  .fade-enter{
    opacity:0;
  }
  .fade-enter-active{
      transition: opacity 2s linear;
  }
  .fade-enter-to{
    opacity:1;
  }
  .fade-leave{
    transform:translate(0%);
  }
  .fade-leave-active{
    transition: transform 2s linear;
  }
  .fade-leave-to{
    transform:translate(100%);
  }
</style>
