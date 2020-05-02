import Vue from "vue";
import Vuex from "vuex";
import appService from '../services/app.service.js'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {},
  state: {
    popularMovies: [],
    trendingMovies: [],
    popularShows:[]
  },
  getters: {
    popularMovies: state => state.popularMovies,
    trendingMovies: state => state.trendingMovies,
    popularShows :state => state.popularShows
  },
  mutations: {
    setPopularMovies: (state, popularMovies) => {
      state.popularMovies = popularMovies
    },
    setTrendingMovies: (state, trendingMovies) => {
      state.trendingMovies = trendingMovies
    },
    setPopularShows: (state, popularShows) => {
      state.popularShows = popularShows
    },
  },
  actions: {
    getPopularMovies({ commit }, ) {
      return new Promise(resolve => {
        appService.getPopularMovies()
          .then(data => {
            commit('setPopularMovies',data)
            resolve()
          })
          .catch(() => {

          })
      })
    },
    getTrendingMovies({ commit }, ) {
      return new Promise(resolve => {
        appService.getTrendingMovies()
          .then(data => {
            commit('setTrendingMovies',data)
            resolve()
          })
          .catch(() => {

          })
      })
    },
    popularShows({ commit }, ) {
      return new Promise(resolve => {
        appService.popularShows()
          .then(data => {
            commit('setPopularShows',data)
            resolve()
          })
          .catch(() => {

          })
      })
    }
  },
});
