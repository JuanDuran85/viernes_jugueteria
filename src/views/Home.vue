<template>
  <div class="jumbotron">
    <div class="text-center">
      <img src="https://vignette.wikia.nocookie.net/logopedia/images/e/e4/14221627832_d3e633767d_b.jpg/revision/latest?cb=20171022183908" alt="img" class="img-fluid">
    </div>
    <h1 class="display-4">Juguetes Otto Kraus</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <a class="btn btn-primary btn-lg" href="#" role="button" @click="salida">Salir</a>
  </div>
</template>

<script>
import firebase from 'firebase';

export default {
  name: 'Home',
  methods: {
    salida(){
      firebase.auth().signOut().then(()=>{
        console.log("salida de usuario")
        this.$router.push('/login');
      })
    }
  },
}
</script>
