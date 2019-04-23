import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    bgColor:'pink',
    title:'movie',
    photoList:[]
  },
  mutations: {
    changeBg(state,menu){
      state.bgColor = menu.bgColor;
      state.title = menu.title;
    },
    photo(state,list){
      state.photoList = list;
    },

  },
  actions: {
    changeBg({commit},menu){
      commit('changeBg',menu)
    },
    setPhoto({commit},list){
      commit('photo',list)
    }
  },
});
