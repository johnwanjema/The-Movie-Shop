import Vue from "vue";
import Vuex from "vuex";
import appService from '../services/app.service.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    popularMovies: [],
    trendingMovies: []
  },
  getters: {
    popularMovies: state => state.popularMovies,
    trendingMovies: state => state.trendingMovies,
  },
  mutations: {
    setPopularMovies: (state, popularMovies) => {
      state.popularMovies = popularMovies
    },
    setTrendingMovies: (state, trendingMovies) => {
      state.trendingMovies = trendingMovies
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
    },
    getTrendingMovies({ commit }, credentials) {
      return new Promise(resolve => {
        appService.getTrendingMovies(credentials)
          .then(data => {
            commit('setTrendingMovies',data)
            resolve()
          })
          .catch(() => {

          })
      })
    }
  },
});
