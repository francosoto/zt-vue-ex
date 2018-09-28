<template>
  <div class="home">
  	<Menu/>
  	<Layout/>
  	<Footer/>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Home msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Layout from '@/components/Layout.vue';
import Menu from '@/components/Menu.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'home',
  components: {
    Menu,
    Layout,
    Footer,
  },
};
</script>
