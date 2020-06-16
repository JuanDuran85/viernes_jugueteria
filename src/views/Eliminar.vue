<template>
  <div>
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Eliminar producto</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                Eliminando el producto:
                {{jugueteEliminar.codigo}} - {{jugueteEliminar.nombre}}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" @click="salir">Cancelar</button>
                <button type="button" class="btn btn-danger" @click="eliminarProduc" data-dismiss="modal">Eliminar</button>
            </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import { db } from "../main";
import $ from 'jquery';
import Swal from 'sweetalert2';

export default {
    name: 'Eliminar',
    data() {
        return {
            jugueteEliminar: ''
        }
    },
    methods: {
        eliminarProduc(){
            db.collection("productos").doc(this.$route.params.id).delete().then(()=>{
                this.$router.push('/administracion');
            })
        },
        salir(){
            this.$router.push('/administracion');
        }
    },
    mounted() {
        db.collection("productos").doc(this.$route.params.id).get().then(data=>{
            if (data.data() == undefined){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'El producto no existe, no siga intentado',
                    footer: 'Juguetes Otto Kraus - '
                }).then(()=>{
                    this.$router.push('/administracion');
                })
            }else{
                this.jugueteEliminar = data.data();
                $('#exampleModal').modal('show');
            }
        })
    },
}
</script>

<style>

</style>