<template>
<div id="app">
  <Navbar/>
  <!-- <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
  </div> -->
    <router-view class="paddingExtra" />
    <HFooter id="footer"></HFooter>
</div>
</template>
<script>
import Navbar from './components/Navbar.vue'
import HFooter from 'vue-hacktiv8-footer'
export default {
  components: {
    Navbar,
    HFooter
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#footer {
  position: fixed;
  padding: 10px 10px 0px 10px;
  bottom: 0;
  width: 100%;
}

.paddingExtra {
  padding-bottom: 100px;
}
</style>
