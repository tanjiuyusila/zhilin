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
};
</script>
