<template>
  <div class="container">
      <div class="d-block">
        <h1 class="mt-5 d-inline-block">Listado de Jugues</h1>
        <button type="button" class="ml-3 mb-2 btn btn-primary d-inline-block" data-toggle="modal" data-target="#exampleModal">
            Agregar
        </button>
      </div>
      <table class="table table-hover" v-if="$store.state.uidUser">
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
                <td><button class="btn btn-danger" @click="eliminando(item.idDoc)">
                        Eliminar
                </button></td>
            </tr>
        </tbody>
    </table>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Agregando Juguete</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <form>
                <div class="form-group">
                    <label for="codigo">Código del Producto</label>
                    <input type="text" class="form-control" v-model="codigo" placeholder="Ingrese el código del producto">
                </div>
                <div class="form-group">
                    <label for="nombre">Nombre del Producto</label>
                    <input type="text" class="form-control" v-model="nombre" placeholder="Ingrese el nombre del producto">
                </div>
                <div class="form-group">
                    <label for="stock">Stock del Producto</label>
                    <input type="number" class="form-control" v-model="stock">
                </div>
                <div class="form-group">
                    <label for="precio">Precio del Producto</label>
                    <input type="number" class="form-control" v-model="precio">
                </div>
            </form>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
            <button type="button" class="btn btn-primary" data-dismiss="modal" @click.prevent="agregando">Agregar</button>
        </div>
        </div>
    </div>
    </div>

  </div>
</template>

<script>
import { db } from "../main";
import Swal from 'sweetalert2';

export default {
    name: 'Lista',
    data() {
        return {
            codigo: '',
            nombre: '',
            stock: 0,
            precio: 0,
        }
    },
    computed: {
        producJuguete(){
           return this.$store.getters.mostrandoJuguetes; 
        }
    },
    methods: {
        editarProducto(id){
            this.$store.dispatch('pasandoIdProduc',id);
            this.$router.push('/edicion');
        },
        eliminando(id){
            this.$router.push(`/eliminar/${id}`);
        },
        agregando(){
            if(this.nombre && this.precio && this.stock && this.codigo){
                db.collection("productos").add({
                    codigo: this.codigo,
                    nombre: this.nombre,
                    stock: parseInt(this.stock),
                    precio: parseFloat(this.precio)
                }).then(()=>{
                    console.log("producto agregado")
                })
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Debes ingresar datos',
                    footer: 'Juguetes Otto Kraus'
                })
            }
        }
    },
}
</script>

<style>

</style>