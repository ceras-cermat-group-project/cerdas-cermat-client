<template>
<div class="bg">
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
<div v-for="item in quizzes" :key="item.id"  class="col-md-4">
         <div class="card mb-4 text-white bg-dark">
            <img class="card-img-top" src='' alt="Card image cap">
            <div class="card-body">
               <h5 class="card-title">Card title</h5>
               <p class="card-text">{{item.question}}</p>
               <a href="http://www.jquery2dotnet.com/" class="btn btn-outline-light btn-sm">Go somewhere</a>
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
