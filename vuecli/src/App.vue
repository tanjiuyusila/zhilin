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
      <router-link to="/about">About</router-link>|
<!--例1-->
      <router-link to="/mine">Mine</router-link>
<!---->
    </div>
    <router-view/>
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
</style>
