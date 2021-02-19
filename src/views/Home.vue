<template>
<div class="bg">
  <button type="button" class="btn btn-danger" @click="fetchQuiz">Start</button>
<div class="container">
  <h1 style="color: green">{{score}}</h1>

<form @submit.prevent="UserAnswer">
  <label>
    <p class="label-txt" style="color: greeen">Jawaban</p>
    <input type="text" class="input" v-model="answer">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button type="submit">submit</button>
</form>
<div class="col-md-4">
         <div class="card mb-4 text-white bg-dark">
            <img class="card-img-top" :src="getImage" alt="Card image cap">
            <div class="card-body">
               <h5 class="card-title">pertanyaan {{quiz.id}}</h5>
            </div>
         </div>
      </div>
</div>
<div class="api">
        <img src="https://i.imgur.com/IG7b6Zz.png">
        <img src="https://i.imgur.com/mRXIRS3.png">
        <img src="https://i.imgur.com/IG7b6Zz.png">
        <img src="https://i.imgur.com/fPqOtwo.png">
        <img src="https://i.imgur.com/mRXIRS3.png">
    </div>
</div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      answer: ''
    }
  },
  sockets: {
    connect: function () {
      console.log('<<<<<< connected')
    },
    testKeClient (data) {
      console.log('dari server', data)
    },
    Quiz (data) {
      this.$store.dispatch('fetchQuiz', data)
    },
    nextQuiz (payload) {
      this.$store.dispatch('fetchQuiz', payload)
    },
    scoring (score) {
      this.$store.dispatch('scoring', score)
    }
  },
  methods: {
    UserAnswer () {
      const payload = {
        answer: this.answer,
        quizId: this.$store.state.quiz.id,
        UserId: this.$socket.id
      }
      // console.log(payload)
      this.$socket.emit('inputUser', payload)
      this.answer = ''
    },
    testingConnect () {
      // let inputuser =''
      // let quizid = this.$store.state.quiz.quizId
      // quizid++
      this.$socket.emit('testing', 'input, quizid')
    },
    fetchQuiz () {
      const quizId = 1
      this.$socket.emit('fetchQuiz', quizId)
      // quizId++
    }

  },
  computed: {
    quiz () {
      return this.$store.state.quiz
    },
    score () {
      return this.$store.state.score
    },
    getImage () {
      return this.quiz.question
    }
  }
}
</script>

<style>

</style>
