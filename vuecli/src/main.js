import Vue from 'vue';//nodemodule中取，不需要./
import App from './App.vue';//导入总组件
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
//   字符串模板代替方案：该函数接收一个creatElement，作为第一个参数创建一个虚拟dom
//   将app创建成一个虚拟dom，然后自动调用$mount，挂载到#app下
//   有render，就不需要el或者template
}).$mount('#app');
