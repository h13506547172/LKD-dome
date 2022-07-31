import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import app from './modules/app'
import settings from './modules/settings'
import user from './modules/user'
import createVuexPersisted from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    token: '',
  },
  mutations: {
    getToken(state,data) {
      state.token = data
    }
  },
  actions: {
    asyncGetToken(context, data) {
      context.commit('getToken', data)
    }
  },
  modules: {
    app,
    settings,
    user,
  },
  getters,
  plugins: [
    // 默认是所有vuex模块中的state的值存入本地
    createVuexPersisted(),
  ],
})

export default store
