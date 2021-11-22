import Vue from 'vue'
import Vuex from 'vuex'

import user from '../api/components/user/store'
import project from '../api/components/project/store'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    host: process.env.VUE_APP_BACKEND_HOST
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user,
    project
  }
})
