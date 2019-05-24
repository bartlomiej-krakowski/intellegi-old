<template>
  <div id="app">
    <Navigation />
    <Header />
    <Sidebar />
    <Main />
    <Nofitication />
  </div>
</template>

<style lang="scss">
</style>

<script>
  import Navigation from '@/includes/layout/Navigation.vue';
  import Sidebar from '@/includes/layout/Sidebar.vue';
  import Header from '@/includes/layout/Header.vue';
  import Main from '@/includes/layout/Main.vue';
  import Nofitication from '@/includes/layout/Nofitication.vue';

  export default {
  name: 'App',
  components: {
    Navigation,
    Sidebar,
    Header,
    Main,
    Nofitication
  },
}
</script>


