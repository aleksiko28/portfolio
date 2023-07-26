<script>
  export let amount = 5
  export let value = 4
  const arr = [...Array(amount).keys()]
</script>

<div class="rating-container">
  {#each arr as i}
    <span
      key={i}
      class={i < value ? "rating-bubble filled" : "rating-bubble"}
    />
  {/each}
</div>

<style lang="scss">
  @import "../styles/index.scss";

  .rating-container {
    display: flex;
    gap: 0.25rem;
    .rating-bubble {
      border-radius: 50%;
      width: 0.75rem;
      height: 0.75rem;
      background: gray;
      &.filled {
        background: $accent-gradient;
        background-size: 150%;
      }
    }
  }
</style>
