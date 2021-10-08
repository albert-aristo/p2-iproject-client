<template>
  <!-- <nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <div>
      <router-link class="navbar-a" to="/">Home</router-link>
      <router-link class="navbar-a" to="/">Register</router-link>
      <router-link class="navbar-a" to="/">Login</router-link>
      <router-link class="navbar-a" to="/">Stock</router-link>
      <router-link class="navbar-a" to="/">Order</router-link>
    </div>
  </div>
</nav> -->
    <div id="navbar">
      <div class="navbar-contain">
      <router-link v-if="!loginCondition" class="navbar-a" to="/login">Login</router-link>
      <router-link v-if="!loginCondition" class="navbar-a" to="/register">Register</router-link>
      <a v-if="loginCondition" class="navbar-a" @click.prevent="Home">Home</a>
      <a v-if="loginCondition" class="navbar-a" @click.prevent="invoice">Invoice</a>
      <router-link v-if="loginCondition" class="navbar-a" to="/stock">Stock</router-link>
      <a v-if="loginCondition" class="navbar-a" @click.prevent="logout">Logout</a>
      </div>
    </div>
</template>

<script>
export default {
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.$store.commit('assignLoginCondigiton', false)
      this.$router.push({ name: 'Login' })
    },
    invoice () {
      this.$store.dispatch('allInvoice')
      this.$router.push({ name: 'Invoice' })
    },
    Home () {
      this.$router.push({ name: 'Home' })
    }
  },
  computed: {
    loginCondition () {
      return this.$store.state.loginCondition
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#navbar {
  display: flex;
  background-color: palegoldenrod;
}

.navbar-contain{
  float: left;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 27px;
}

.navbar a{
  margin: 15px;
  float: left;
}

.navbar-a{
  margin-left: 20px;
  text-decoration: none;
}
</style>
