<script>
  export let primary = "red"
  export let secondary = "blue"
</script>

<div
  style="--primary: {primary}; --secondary: {secondary}"
  class="section-wrapper hidden"
>
  <slot />
</div>

<style lang="scss">
  @import "../styles/index.scss";

  .section-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 2rem;
    position: relative;
    transition: all 2s ease;

    &.hidden {
      &::before {
        opacity: 0;
        scale: 0;
      }
    }

    &.visible {
      &::before {
        opacity: 1;
        scale: 1;
      }
    }
    &::before {
      transition: all $transition-slow ease;
      position: absolute;
      content: "";
      z-index: -1;
      top: -0%;
      bottom: -10rem;
      width: 100%;
      left: 0;
      background: url("../assets/background/noise.webp") repeat,
        linear-gradient(83.21deg, var(--primary) 0%, var(--secondary) 100%);
      background-blend-mode: overlay;
      -webkit-mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);
      mask-image: radial-gradient(rgba(0, 0, 0, 0.5), transparent 70%);
    }
  }
</style>
