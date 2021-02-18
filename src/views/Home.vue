<template>
<div class="container">
<h1>{{quizzes}}</h1>
<form>
  <label>
    <p class="label-txt"></p>
    <input type="text" class="input">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <label>
    <p class="label-txt">Jawaban</p>
    <input type="text" class="input">
    <div class="line-box">
      <div class="line"></div>
    </div>
  </label>
  <button type="submit">submit</button>
</form>
</div>
</template>

<script>
export default {
  name: 'Home',
  sockets: {
    connect: function () {
      console.log('<<<<<< connected')
    },
    testKeClient (data) {
      console.log('dari server', data)
    }
  },
  methods: {
    testingConnect () {
      this.$socket.emit('testing', 'input, quizid')
    }
  },
  created () {
    this.$store.dispatch('fetchQuiz')
  },
  computed: {
    quizzes () {
      return this.$store.state.quizzes
    }
  }
}
</script>

<style>

</style>
