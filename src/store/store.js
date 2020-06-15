import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uidUser: '',
    juguetes: [], // se carga con los valores de la base de datos
  },
  getters: {
    mostrandoJuguetes(state){
      return state.juguetes;
    }
  },
  mutations: {
    agregandoId(state,idRecibido){
      state.uidUser = idRecibido;
    },
    traerBD(state){
      db.collection("productos").onSnapshot(info=>{
        
      })
    }
  },
  actions: {
    idUserLog(context,idUsuarioRecibido){
      context.commit('agregandoId',idUsuarioRecibido);
    }
  },
})
