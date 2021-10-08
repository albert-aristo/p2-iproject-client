<template>
    <div class="eachForm" id="login-form">
        <form @submit.prevent="loginForm">
            <div id="login">
                <div class="each-form">
                    <h1>Login</h1>
                </div>
                <div class="each-form">
                    <label>Email</label>
                    <input type="text" v-model="email">
                </div>
                <div class="each-form">
                    <label>Password</label>
                    <input type="password" v-model="password">
                </div>
                <div class="each-form">
                    <button type="submit">Login</button>
                </div>
            </div>
        </form>
        <GoogleLogin :params="params" :onSuccess="onSuccess" :onFailure="onFailure">Login Google</GoogleLogin>
    </div>
</template>

<script>
import { GoogleLogin } from 'vue-google-login'
export default {
  data () {
    return {
      email: '',
      password: '',
      params: {
        client_id: '823931053888-00f9r5vhu83ve6euo2dhp31cv6chl8ik.apps.googleusercontent.com'
      },
      renderParams: {
        width: 250,
        height: 50,
        longtitle: true
      }
    }
  },
  methods: {
    loginForm () {
      this.$store.dispatch('login', { email: this.email, password: this.password })
    },
    onSuccess (googleUser) {
      var idtoken = googleUser.getAuthResponse().id_token
      console.log(idtoken)
      this.$store.dispatch('googleLogin', idtoken)
    //   console.log(googleUser)
      // This only gets the user information: id, name, imageUrl and email
    //   console.log(googleUser.getBasicProfile())
    },
    onFailure (googleUser) {
      console.log(googleUser)
      console.log('It gets called if the action (login/logout) fails.')
    }
  },
  components: {
    GoogleLogin
  }
}
</script>

<style>
*{
    margin: 0;
    padding: 0;
}

#app{
    font-size: 34px;
}

.each-form{
    display: flex;
    justify-content: center;
    margin: 30px;
}

button{
    font-size: 48px;
}

label{
    margin-right: 10px;
}

.eachForm{
    display: flex;
    justify-content: center;
    margin: 30px;
    border: 3px solid black;
    border-radius: 20px;
}

.eachForm input{
    height: 39px;
    font-size: 39px;
}
</style>
