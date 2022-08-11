<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>Contador: {{ $store.state.contador }}</h1>
    <input type="text" v-model="texto"> <!--vmodel hace una conexion entre el input y otra cosa que tengamos en un componente-->
    <h2>{{texto}}</h2>
  </div>
</template>
<script>
 export default{
   data() {
    return {
      texto: ''
    }
  },
 }
</script>
