import Vue from 'vue';
import Vuex from 'vuex';
import { db } from '../main';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    uidUser: '',
    juguetes: [], // se carga con los valores de la base de datos
    idProducto: '',
  },
  getters: {
    mostrandoJuguetes(state){
      return state.juguetes;
    },
    envioIdProducto(state){
      return state.idProducto;
    }
  },
  mutations: {
    agregandoId(state,idRecibido){
      state.uidUser = idRecibido;
    },
    traerBD(state){
      db.collection("productos").onSnapshot(info=>{
        let aux = [];
        console.log(info);
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
    },
    guardandoIdProducto(state,id){
      state.idProducto = id;
    }
  },
  actions: {
    idUserLog(context,idUsuarioRecibido){
      context.commit('agregandoId',idUsuarioRecibido);
    },
    activandoMutacionDB(context){
      context.commit('traerBD');
    },
    pasandoIdProduc(context,id){
      context.commit('guardandoIdProducto',id);
    }
  },
})
