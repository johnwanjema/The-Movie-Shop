import Vue from "vue";
import Vuex from "vuex";
import appService from '../services/app.service.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    popularMovies: []
  },
  getters: {
    popularMovies: state => state.popularMovies,
  },
  mutations: {
    setPopularMovies: (state, popularMovies) => {
      state.popularMovies = popularMovies
    },
  },
  actions: {
    getPopularMovies({ commit }, credentials) {
      return new Promise(resolve => {
        appService.getPopularMovies(credentials)
          .then(data => {
            commit('setPopularMovies',data)
            resolve()
          })
          .catch(() => {

          })
      })
    }
  },
});
