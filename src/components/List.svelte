<script lang="ts">
  interface item {
    key: string
    value: string
  }
  export let items: item[]
</script>

<div class="list">
  {#each items as item}
    <div class="item">
      <h4>{item.key}</h4>
      <p>{item.value}</p>
    </div>
  {/each}
</div>

<style lang="scss">
  @import "../styles/index.scss";

  .list {
    display: flex;
    flex-direction: column;
    color: var(--body-text-color);
    gap: $padding-m;

    .item {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
    }

    h4 {
      margin: 0;
      text-transform: uppercase;
      font-size: 0.75rem;
      color: var(--body-text-color--subtle);
    }

    p {
      margin: 0;
      font-size: 0.875rem;
    }
  }
</style>
