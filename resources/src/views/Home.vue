<template>
  <div class="__banner" v-cloak>
    <div class="banner__inner">
      <img src="../assets/img/logo.svg">
      <h1>TENDER</h1>
      <h2>Submission Tracking for Authors</h2>
      <h2>Coming Soon</h2>

      <icons></icons>

      <subscribe></subscribe>

    </div>
  </div>
</template>

<script>
import Icons from '../components/Icons.vue';
import Subscribe from '../components/Subscribe.vue';
export default {
  components: {
    Icons,
    Subscribe
  },
};
</script>
