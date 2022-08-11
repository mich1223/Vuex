<template>
  <div class="home">
   
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
    <h1 :style="colorContador">{{titulo}}: {{ contador }}</h1> <!--cambiamos el estilo en este caso el color, mandamos llamar la prop. comp. colorContador, además de llamar el state contador-->
    <button @click="accionIncrementar">Incrementar</button> <!--botón que incrementa el contador mediante la acción "Accion incrementar" -->
    <BtnDisminuir /><!--boton disminuir-->
    
    <hr>
    <BotonAction :estado="true" /> <!--llamada componente BotonAction-->
    <BotonAction :estado="false" /> <!--llamada componente BotonAction-->
    
  </div>
    
</template>

<script>
// @ is an alias to /src
import BtnDisminuir from '../components/BtnDisminuir.vue' /*importamos componente BtnDisminuir */
import BotonAction from '../components/BotonAction.vue'/*importamos componente BotonAction */
import {mapState, mapMutations, mapActions} from 'vuex'/*importamos vuex */


export default {
  
  name: 'HomeView',
  components: {
    BtnDisminuir,
    BotonAction
},
  data(){
    return{
      titulo:'Mi contador Vuex'
    }
    
  },
  computed:{ /*propiedades computadas */
      ...mapState(['contador']), /*mapeo del state contador*/
      colorContador(){ /*Si contador es mayor a 100 entonces pinta el titulo en verde sino rojo*/
        return[this.contador > 100 ? {'color': 'green'} : {'color':'red'}]
      }
  },
  methods:{
    
    ...mapActions(['accionIncrementar']),/*mapeo de accion que acciona la mutacion de incrementar */
    

  }
}
</script>
