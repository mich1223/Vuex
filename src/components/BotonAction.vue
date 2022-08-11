<template>
   <button
   @click="accionBoton({estado: estado, numero:10})" 
   >{{textoBoton}}</button> <!--crea un boton con el texto que se manda del método textoBoton y envía dos parámetros-->
   
</template>

<script >
import { mapActions } from 'vuex'

    export default{
        props:{
            estado:Boolean /*Para activar o desactivar el boton */
        },
        computed:{
            textoBoton(){
                return this.estado ? 'Aumentar' : 'Disminuir'
            }
        },
        methods:{
            ...mapActions(['accionBoton']) /*mapeamos accionboton */

        }
    }
</script>

<style >

</style>