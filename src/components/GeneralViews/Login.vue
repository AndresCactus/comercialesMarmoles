<template>
  <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <div class="logo-img">
        <img src="static/img/marmoles-logo-black.png" alt="">
      </div>
      <h2 class="form-signin-heading">MÁRMOLES SOL</h2>
      <h4 class="form-signin-heading">COMERCIALES</h4>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputText" class="sr-only">Usuario</label>
      <input v-model="text" type="text" id="inputText" class="form-control" placeholder="Usuario" required autofocus>
      <label for="inputPassword" class="sr-only">Contraseña</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Contraseña" required>
      <button class="btn btn-block btn-login" type="submit">INICIAR SESIÓN</button>
    </form>
  </div>
</template>

<script>

import db from '../firebaseInit'

export default {
  name: 'Login',
  data () {
    return {
      text: '',
      password: '',
      error: false
    }
  },
  updated () {
    if (localStorage.token) {
      this.$router.replace(this.$route.query.redirect || '/admin/overview');
    }
  },
  methods: {
    login(){
      db.auth().signInWithEmailAndPassword(this.text, this.password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
    },

    // login () {
    //   this.$http.post('http://www.mocky.io/v2/5adef24d3300006a00e4d6c7', { user: this.text, password: this.password })
    //     .then(request => this.loginSuccessful(request))
    //     .catch(() => this.loginFailed())
    // },
    // loginSuccessful (req) {
    //   console.log(req);
    //   if (!req.data.token) {
    //     this.loginFailed()
    //     return
    //   }
    //   // if (this.text != req.data.user || this.password != req.data.password) {
    //   //   this.loginFailed()
    //   //   return
    //   // }
    //   this.error = false;
    //   localStorage.token = req.data.token;
    //   this.$router.replace(this.$route.query.redirect || '/admin');
    // },
    // loginFailed () {
    //   this.error = 'Usuario o contraseña erroreos!';
    //   delete localStorage.token;
    // }
  }
}
</script>

<style lang="css">
body {
  /* background: #605B56; */
  background-image: url("../../../static/img/background-image.jpg");
  background-repeat: no-repeat;
  background-size: auto;
  height: 100%;
  min-height: 0px;
}

.login-wrapper {
  background: rgba(255, 255, 255, 0.8);
  width: 400px;
  margin: 15% auto;
  border-radius: 20px;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
  text-align: center;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="text"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

.btn-login{
  background-color: black;
  color: white;
  border-radius: 20px;
  border: 0px;
}

.form-control{
  border-top: 0px !important;
  border-left: 0px !important;
  border-right: 0px !important;
  background-color: transparent !important;
}

.logo-img{
  width: 100%;
  height: 100%;
}

.logo-img img {
    max-width: 150px !important;
}

h2{
  margin-top: 10px !important;
}

h4{
  margin-top: 10px !important;
}

.form-control::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: grey;
  text-align: center;
}
.form-control::-moz-placeholder { /* Firefox 19+ */
  color: grey;
  text-align: center;
}
.form-control:-ms-input-placeholder { /* IE 10+ */
  color: grey;
  text-align: center;
}
.form-control:-moz-placeholder { /* Firefox 18- */
  color: grey;
  text-align: center;
}

</style>