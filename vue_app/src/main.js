import Vue from 'vue';
import App from './App.vue';//导入总组件
import router from './router';
import store from './store';
import '@/assets/css/reset.css';//css文件直接导入
import '@/assets/js/rem';//相对html的font-size大小,font-size是50px，1rem就是50px
import "@/assets/css/vue-swipe.css";//book

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
//   字符串模板代替方案：该函数接收一个creatElement，作为第一个参数创建一个虚拟dom
//   将app创建成一个虚拟dom，然后自动调用mount，挂载到#app下
//   有render，就不需要el或者template
}).$mount('#app');
