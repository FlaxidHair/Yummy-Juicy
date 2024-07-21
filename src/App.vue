<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style>

</style>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
export default {
  components:{Header,Footer},
  data() {
    return {
      
    }
  },
  methods: {
   
  },
}
</script>