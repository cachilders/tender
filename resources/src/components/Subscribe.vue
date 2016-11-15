<template>
  <div>
    <form
      style="margin-top:2rem;"
      action="https://tinyletter.com/Tender"
      method="post"
      target="popupwindow"
      onsubmit="window.open(
        'https://tinyletter.com/Tender',
        'popupwindow',
        'scrollbars=yes,width=800,height=600'
      );return true"
      class="subscribe">
      <p hidden>
        <label for="tlemail">Subscribe for updates</label>
      </p><p>
        <input type="text" name="email" id="tlemail" placeholder="Enter your email address for updates" />
        <input type="hidden" value="1" name="embed"/>
        <input type="submit" value="Subscribe" />
      </p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
