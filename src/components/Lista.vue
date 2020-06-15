<template>
  <div class="container">
      <h1 class="mt-5">Listado de Jugues</h1>
      <table class="table table-hover">
        <thead>
            <tr>
                <th>Código</th>
                <th>Nombre</th>
                <th>Stock</th>
                <th>Precio</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in producJuguete" :key="index">
                <th>{{item.codigo}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.stock}}</td>
                <td>{{item.precio}}</td>
            </tr>
        </tbody>
    </table>
  </div>
</template>

<script>
export default {
    name: 'Lista',
    computed: {
        producJuguete(){
           return this.$store.getters.mostrandoJuguetes; 
        }
    },
}
</script>

<style>

</style>