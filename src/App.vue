<template>
  <div id="app">
    <!-- <testing/> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
// import testing from './components/form'
export default {
  components: {
    // testing
  }
}
</script>
<style>

</style>
