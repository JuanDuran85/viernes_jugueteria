<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <router-link class="navbar-brand" to="/">Otto Kraus</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home<span class="sr-only">(current)</span></router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/administracion">Administración</router-link>
                </li>
                <a class="nav-link" href="#" @click="salida">Logout</a>
            </ul>
        </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
    name: 'Navegacion2',
    methods: {
    salida(){
      firebase.auth().signOut().then(()=>{
        console.log("salida de usuario")
        this.$router.replace('/login');
      })
    },
  },
}
</script>

<style>

</style>