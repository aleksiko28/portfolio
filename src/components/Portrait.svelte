<script>
  import portrait from "../assets/portrait.png"
  import Planet from "./Planet.svelte"
</script>

<div class="portrait-container">
  <Planet />
  <img class="portrait" src={portrait.src} />
</div>

<style lang="scss">
  .portrait-container {
    position: relative;
    .bg {
      filter: blur(12px);
      width: 100%;
      height: 100%;
      position: absolute;
      background: radial-gradient(red, yellow);
      border-radius: 50%;
    }
    .portrait {
      width: 11.5rem;
      position: relative;
      z-index: 999;
    }
  }
</style>
