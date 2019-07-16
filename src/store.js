import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)


let api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/search/movie?api_key=606e6aee588b47993fffe6d9530d07a6&page=1&include_adult=false&query='
})


export default new Vuex.Store({
  state: {
    movies: [],
    activeMovie: {}
  },
  mutations: {
    setMovies(state, data) {
      state.movies = data
    },
    setActiveMovie(state, data) {
      state.activeMovie = data
    }
  },
  actions: {
    async search({ dispatch, commit }, query) {
      try {
        let res = await api.get(query)
        commit("setMovies", res.data.results)
      } catch (err) { console.error(err) }
    },
    setActiveMovie({ commit, dispatch }, movie) {
      commit('setActiveMovie', movie)
    }
  }
})
