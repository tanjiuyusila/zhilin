<template>
  <!--只有一个根元素-->
  <div>
    <h1>这是我的页面</h1>
<!--例2：子路由-->
    <!--<router-link to="/mine/test1">子路由1</router-link>|-->
    <!--<router-link to="/mine/test2">子路由2</router-link>|-->
    <!--&lt;!&ndash;是mine的子路由，就要在mine的template里写一个router-view&ndash;&gt;-->
    <!--<router-view></router-view>-->
<!---->
<!--例3：参数传递 写成对象结构-->
    <router-link :to="{name:'test1',params:{name:'yaozhilin',age:25}}">子路由1</router-link>|
    <!--写成url传参之后，不加参数就不会好使了，路径/test2和test2/:name/:age不是一个路径-->
    <router-link to="/mine/test2">子路由2</router-link>|
    <router-view></router-view>
<!---->
  </div>
</template>
<script>
  export default {

  }
</script>
<style>

</style>
