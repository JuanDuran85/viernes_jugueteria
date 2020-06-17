<template>
  <div>
    <navegacion v-if="!$store.state.uidUser"></navegacion>
    <navegacion2 v-else></navegacion2>
    <router-view/>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import Navegacion2 from './components/Navegacion2.vue';
import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    Navegacion,
    Navegacion2
  },
  mounted() {
    firebase.auth().onAuthStateChanged(user=>{
      if (user) {
        this.$store.dispatch('idUserLog',user.uid);
      }else{
        console.log("Salida de Usuario")
        this.$store.dispatch('idUserLog','');
      }
    });
    this.$store.dispatch('activandoMutacionDB');
  },
}
</script>

<style lang="scss">

@import "../node_modules/bootstrap/scss/bootstrap.scss";
</style>
