import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bgColor:'pink',
    title:'movie'
  },
  mutations: {
    changeBg(state,menu){
      state.bgColor = menu.bgColor;
      state.title = menu.title;
    },

  },
  actions: {
    changeBg({commit},menu){
      commit('changeBg',menu)
    }
  },
});
