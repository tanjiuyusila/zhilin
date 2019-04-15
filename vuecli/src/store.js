import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
      count:10,
      msg:'yzl'
  },
  mutations: {
// 2. 更改store中的值
    // add(state){
    //   state.count ++;
    // },
    // sub(state){
    //   state.count --;
    // },
// 2. 更改store中的值,带参数
    add(state,num){
      state.count += num;
    },
    sub(state,num){
      state.count -= num;
    },
  },
  //6. actions 之前是直接提交给mutation，现在是调用action提交给mutation
  actions: {
    addNum({commit},num){
      commit('add',num)
    }
  },
  //5.
  getters:{ //  相当于原生计算属性
    count100:(state) =>{
      return state.count + 100;
    }
  },
});
