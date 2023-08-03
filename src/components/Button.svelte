<script lang="ts">
  let buttonProps = {
    class: [$$restProps.class],
  }
  export let href: string = ""
  export let target: string = "_blank"
  export let rel: string = "noreferrer"
  export let download: string = "filename.jpg"
  export let id: string = ""
</script>

{#if href === ""}
  <button
    on:click
    on:mouseover
    on:mouseenter
    on:mouseleave
    {id}
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
    {download}
    {id}
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
    padding: 0.675rem $padding-m;
    border: 1px solid rgba(255, 255, 255, 0.08);
    background: var(--background-color-button);
    transition: all $transition-fast ease;
    color: var(--color-button);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    text-decoration: unset;
    &:hover {
      cursor: pointer;
      border-color: var(--button-border-color-hover);
      box-shadow: 0 6px 12px var(--button-shadow-hover);
    }
    &:active {
      transform: scale(0.94);
      border-color: var(--accent-dim);
    }
  }
</style>
