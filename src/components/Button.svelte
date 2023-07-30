<script lang="ts">
  let buttonProps = {
    class: [$$restProps.class],
  }
  export let href: string = ""
  export let target: string = "_blank"
  export let rel: string = "noreferrer"
</script>

{#if href === ""}
  <button
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    {...buttonProps}
    class="btn"
  >
    <slot />
  </button>
{:else}
  <a
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    {href}
    {target}
    {rel}
    {...buttonProps}
    class="btn"
  >
    <slot />
  </a>
{/if}

<style lang="scss">
  @import "../styles/index.scss";

  .btn {
    font-family: $body-font;
    display: flex;
    align-items: center;
    border-radius: $button-border-radius;
    gap: 0.5rem;
    font-size: 1rem;
    padding: 0.675rem 1rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: $background-color-button;
    transition: all $transition-x-fast ease;
    color: $color-button;
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    text-decoration: unset;
    &:hover {
      cursor: pointer;
      border-color: rgba(255, 255, 255, 0.25);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }
    &:active {
      transform: scale(0.94);
      border-color: $accent-dim;
    }
  }
</style>
