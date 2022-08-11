import { createStore } from 'vuex'

export default createStore({
  state: {
    contador:200
  },
  getters: {
  },
  mutations: {
    incrementar(state){
      state.contador = state.contador + 10
    },
    disminuir(state,payload){ /*disminuye el contador recibiendo el parametro payload desde accionDisminuir*/
      state.contador = state.contador - payload
    }
  },
  actions: {
    accionIncrementar({commit}){
      commit('incrementar')
    },
    accionDisminuir({commit}, numero){ /*Accion que activa la mutación disminuir, recibiendo un parámetro desde el componente BtnDisminuir*/
      commit('disminuir', numero)
    },
    accionBoton({commit}, objeto){/*Accion que cambia el nombre según su estado true/false y recibe 2 parámetros*/
      if (objeto.estado){ /* Si el estado en homeview es  */
        commit('incrementar', objeto.numero)/*positivo*/ 
      }else{
        commit('disminuir', objeto.numero)
      }
    }
  },
  modules: {
  }
})
