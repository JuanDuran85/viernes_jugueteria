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
        let aux = [];
        info.forEach((element)=>{
          aux.push({
            codigo: element.data().codigo,
            nombre: element.data().nombre,
            stock: element.data().stock,
            precio: element.data().precio,
            idDoc: element.id
          })
        });
        state.juguetes = aux;
      })
    }
  },
  actions: {
    idUserLog(context,idUsuarioRecibido){
      context.commit('agregandoId',idUsuarioRecibido);
    },
    activandoMutacionDB(context){
      context.commit('traerBD');
    }
  },
})
