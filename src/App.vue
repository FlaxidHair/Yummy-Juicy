<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<style>
.slider {
  display:flex;
}
.clon {
  border:1px solid;
  background-color: red;
}
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
    next() {
    this.$store.state.images
    }
  },
}
</script>