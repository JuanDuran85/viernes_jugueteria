<template>
  <div>
    <navegacion></navegacion>
    <router-view/>
  </div>
</template>

<script>
import Navegacion from './components/Navegacion.vue';
import firebase from 'firebase';

export default {
  name: 'App',
  components: {
    Navegacion
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
