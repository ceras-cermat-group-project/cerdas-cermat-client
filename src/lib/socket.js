import Vue from 'vue'
import VueSocketIO from 'vue-socket.io'

const socket = new VueSocketIO({
  debug: true,
  connection: 'https://cerdas-cermat-server.herokuapp.com'
})

Vue.use(socket)
