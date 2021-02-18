<template>
  <div class="container d-flex justify content-center">
  <form @submit.prevent="login">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username</label>
    <input type="text" class="form-control"  v-model="Username" aria-describedby="emailHelp">
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Login',
  data () {
    return {
      Username: ''
    }
  },
  components: {
  },
  methods: {
    login () {
      localStorage.setItem('Username', this.Username)
      this.$router.push('/')
    }
  }
}
</script>
