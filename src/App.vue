<template>
  <div id="app">  
    <NavBar></NavBar>
   
    <SideBar></SideBar>
   
    <Footer></Footer>
  </div>
</template>

<script>

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    NavBar,
    SideBar,
    Footer,
  }
}
</script>

<style lang="scss">

</style>
