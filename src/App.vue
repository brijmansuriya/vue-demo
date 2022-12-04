<template>
  <router-view />
  <!-- <img class="logo" alt="Vue logo" src="./assets/logo.png">
  <IndexPage msg="Index page " /> -->
</template>

<script>

// import IndexPage from './components/IndexPage.vue'
export default {
  name: 'App',
  components:{
    // IndexPage
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
  margin-top: 60px;

}
.logo{
  width: 100px;
}
</style>
