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
                <th>Editar</th>
                <th>Eliminar</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in producJuguete" :key="index">
                <th>{{item.codigo}}</th>
                <td>{{item.nombre}}</td>
                <td>{{item.stock}}</td>
                <td>{{item.precio}}</td>
                <td><button @click="editarProducto(item.idDoc)" class="btn btn-info">
                        Editar
                </button></td>
                <td><button class="btn btn-danger">
                        Eliminar
                </button></td>
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
    methods: {
        editarProducto(id){
            console.log(id);
            this.$store.dispatch('pasandoIdProduc',id);
            this.$router.push('/edicion');
        }
    },
}
</script>

<style>

</style>