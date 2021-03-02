import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 可在任一子组件中通过this.$store来访问vuex

export default new Vuex.Store({
  state: {
    // token: ''
  },
  mutations: {
    setToken (state, payload) {
      state.token = payload.token
    }

  },
  actions: {
  },
  modules: {
  }
})
