<template>
  <div>
    <h1>子路由1</h1>
    <!--params不可以随意命名-->
    <h1>名字是：{{$route.params.name}}</h1>
    <h1>年龄是：{{$route.params.age}}</h1>
  </div>

</template>
<script>
  export default {

  }
</script>
<style>

</style>
