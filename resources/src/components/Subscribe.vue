<template>
  <div>
    <form
      style="margin-top:2rem;"
      action="https://tinyletter.com/Tender"
      method="post"
      target="popupwindow"
      onsubmit=
        "window.open(
          'https://tinyletter.com/Tender',
          'popupwindow',
          'scrollbars=yes,width=800,height=600'
        );
        return true;"
      class="subscribe">
      <p hidden>
        <label for="tlemail">Subscribe for updates</label>
      </p><p>
        <input
          type="text"
          name="email"
          id="tlemail"
          placeholder="Stay in the Loop"
          onfocus="document.getElementById('tlemail').value = '';"/>
        <input type="hidden" value="1" name="embed"/>
        <button type="submit">Subscribe</button>
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
  div {
    width: 25rem;
    margin: auto;
  }
  input {
    width: 15rem;
    height: 2.7rem;
    opacity: 0.9;
    float: left;
  }
  button {
    width: 10rem;
    height: 2.7rem;
    box-shadow: none;
    opacity: 0.8;
    float: left;
  }
</style>
