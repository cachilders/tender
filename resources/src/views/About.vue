<template>
  <div class="__banner" v-cloak>
    <div class="banner__inner">
      <img src="../assets/img/logo.svg">
      <h1>TENDER</h1>
      <h2>Made by <a href="http://caseychilders.com" alt="Casey's portfolio">Casey Childers</a></h2>
      <h2>Details TK</h2>
      <icons></icons>
    </div>
  </div>
</template>

<script>
import Icons from '../components/Icons.vue';
export default {
  components: {
    Icons
  },
};
</script>
