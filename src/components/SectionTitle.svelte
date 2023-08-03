<script lang="ts">
  import Planet from "./Planet.svelte"

  export let title: string
  export let subtitle: string
  export let planet: string = "earth"
</script>

<div id={title.toLowerCase()} class="section-title">
  <div class="background hidden">
    <Planet name={planet} />
  </div>
  <div class="hidden texts">
    <span class="title">{title}</span>
    <span class="subtitle">{subtitle}</span>
  </div>
</div>

<style lang="scss">
  @import "../styles/index.scss";

  .section-title {
    position: relative;
    height: 15rem;
    display: flex;
    align-items: flex-end;

    .background {
      position: absolute;
      z-index: -1;
      top: -0;
      left: 50%;
      transform: translateX(-50%);
      transition: all $transition-slow ease;

      &.hidden {
        opacity: 0;
        transform: translate(-50%, -20%);
      }

      &.visible {
        opacity: 1;
        transform: translate(-50%, 0%);
      }
    }

    .texts {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.5rem;
      transition: all $transition-slow ease;

      &.hidden {
        opacity: 0;
        transform: translateY(20%);
      }

      &.visible {
        opacity: 1;
        transform: translateY(0%);
      }

      .title {
        text-align: center;
        text-transform: uppercase;
        font-size: 3.5rem;
        padding-top: 1.5rem;
        background: linear-gradient(transparent 0%, black 50%);
        line-height: 1;
        @include title-text;
      }

      .subtitle {
        box-sizing: border-box;
        display: flex;
        position: relative;
        text-align: center;
        width: 100%;
        color: var(--body-text-color);
        padding: 0 $padding-m;
        justify-content: center;
        font-size: 1.25rem;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
