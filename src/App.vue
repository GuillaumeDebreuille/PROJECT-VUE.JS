<template>
  <Header/>
  <div class="spacer"></div>
  <RouterView/>
  <Footer/>
</template>

<script setup>
  import Header from './Header.vue';
  import Footer from './Footer.vue';
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.spacer {
  height: 105px;
}
</style>