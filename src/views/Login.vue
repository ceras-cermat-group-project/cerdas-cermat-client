<template>
  <div>
  <div class="container-fluid bg">
    <div class="judul d-flex justify-content-center">
      <h1>SELAMAT DATANG DI CERDAS CERMAT FOXY.INC</h1>
    </div>
    <div class="row">
      <div class="col-lg-10 col-xl-9 mx-auto mb-5">
        <div class="card-signin flex-row my-5">
          <div class="">
             <!-- Background image for card set in CSS! -->
          </div>
          <div class="tai card-body">
            <h5 class="Fuck card-title text-center">Username</h5>
            <form class="form-signin" @submit.prevent="login">
              <div class="form-label-group mb-5">
                <input type="text" id="inputUserame" v-model="Username" class="form-control" placeholder="Username" required autofocus>
              </div>
              <button class="berak btn btn-lg btn btn-block text-uppercase" type="submit">Play The Game</button>
              <hr class="my-4">
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="justify-content-xl-center p-3 my-5  ">
       <br>
      <h4 class="d-flex justify-content-center quotesdibawah"> karena kami percaya setiap orang memiliki tipe-tipe kecerdasannya masing-masing </h4>
    </div>
  </div>
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

<style>
body, html {
    height: 100%;
  }
  .bg {
  width:100%;
  height:100vh;
  background-image: url('https://wallpaperaccess.com/full/1419179.jpg');
  position: relative;
  overflow-y: auto;
  background-repeat: no-repeat;
  background-size: 110% 110%;
  background-position: center center;
  animation: shrink 12s infinite alternate;
  }

  .btn:not(:disabled):not(.disabled){
    background-color: #eb5e0b;
  }
  .judul{
    color: #ff4301;
  }

  .tai{
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color:transparent;
   box-shadow:  5px 5px 20px #bebebe, -10px -2px 20px #ffffff;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 22px;
  }

  .api img{
  width: 55px;
  animation: api 8s linear infinite ;
}

.Fuck{
  color: rgb(233, 19, 19);
 font-family: 'Anton', sans-serif;
}

.quotesdibawah{
font-family: 'DM Serif Display', serif;
   color: rgb(255, 251, 0);
}
.api{
  width:100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  bottom: 0;
}

@keyframes api {
   0%{
     transform: translateY(0);
     opacity: 0;
   }
   50%{
    opacity: 1;
  }
  70%{
    opacity: 1;
  }
  100%{
    transform: translateY(-80vh);
    opacity: 0;
  }

}

.api img:nth-child(1){
  width: 20px;
   animation-delay: 2s;
}

.api img:nth-child(2){
  animation-delay: 3s;
}
.api img:nth-child(4){
  animation-delay: 5s;
}

.api img:nth-child(3){
  width: 35px;
  animation-delay: 8s;
}

  @keyframes shrink {
  0% {
    background-size: 110% 110%;
  }

  10% {
    background-size: 109% 109%;
  }

  20% {
    background-size: 108% 108%;
  }

  30% {
    background-size: 107% 107%;
  }

  60% {
    background-size: 105% 105%;
  }

  80% {
    background-size: 103% 103%;
  }

  100% {
    background-size: 100% 100%;
  }
}
</style>
