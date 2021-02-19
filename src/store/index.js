import Vue from 'vue'
import Vuex from 'vuex'
// import axios from '../api/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    quiz: [],
    score: 0
  },
  mutations: {
    fetchQuiz (state, payload) {
      state.quiz = payload
    },
    scoring (state, score) {
      state.score += score
    }
  },
  actions: {
    fetchQuiz (context, payload) {
      context.commit('fetchQuiz', payload)
    },
    scoring(context, score) {
      context.commit('scoring', score)
    }
  }
})
