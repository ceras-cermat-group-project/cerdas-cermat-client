import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quizzes: []
  },
  mutations: {
    fetchQuiz (state, payload) {
      state.quizzes = payload
    }
  },
  actions: {
    fetchQuiz (context) {
      axios({
        url: '/quiz',
        method: 'GET'
      })
        .then(({ data }) => {
          context.commit('fetchQuiz', data)
        })
        .catch((error) => {
          console.log('salah disini')
          console.log(error)
        })
    }
  }
})
