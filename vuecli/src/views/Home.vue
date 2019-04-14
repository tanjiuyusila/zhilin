<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!--步骤3：引用组件-->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
//步骤1：引入组件，@代表src，
import HelloWorld from '@/components/HelloWorld.vue';

export default {
  name: 'home',
  components: {
    //步骤2：只有属性名：es6中属性简写，属性名与属性名同名，变成了自己的组件，就可以在上面引用了
    HelloWorld,
  },
//例8：组件内守卫
  beforeRouteEnter(to,from,next){
    //在渲染该组件的对应路由被confirm前调用
    //不能获取组件实例this
    //因为当守卫执行前，组件实例还没有被创建
    console.log(111);
    next();
  },
};
</script>
