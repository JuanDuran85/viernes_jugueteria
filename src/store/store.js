import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uidUser: ''
  },
  getters: {
  },
  mutations: {
    agregandoId(state,idRecibido){
      state.uidUser = idRecibido;
    }
  },
  actions: {
    idUserLog(context,idUsuarioRecibido){
      context.commit('agregandoId',idUsuarioRecibido);
    }
  },
})
