<template>
   <button @click="accionDisminuir(50)">Disminuir</button> <!--Boton que disminuye el contador mediante la accionDisminuir enviando un parámetro-->
</template>

<script>
import {mapActions} from 'vuex'/*importamos de vuex las acciones  */
export default{
    methods:{
        ...mapActions(['accionDisminuir'])/*mapeo de accion que acciona la mutacion de Disminuir */
    }
}
</script>

