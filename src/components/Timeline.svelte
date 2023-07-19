<script lang="ts">
  export let years: string[]
</script>

<div class="container">
  <div class="years">
    {#each years as year}
      <div class="year">
        <p class="text">
          {year}
        </p>
        <span class="circle" />
      </div>
    {/each}
  </div>
  <span class="timeline" />
</div>

<style lang="scss">
  @import "../styles/index.scss";

  .container {
    display: flex;
    gap: 1.5rem;
    .timeline {
      margin-top: 8px;
      left: calc(5rem);
      height: calc(100% - 20px);
      width: 1px;
      background: gray;
    }
  }

  .years {
    display: flex;
    height: 100%;
    align-items: flex-end;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
    position: relative;

    .year {
      position: relative;
      display: flex;
      font-size: 1rem;
      min-width: 4rem;
      align-items: flex-end;
      .text {
        color: $subtle-body-text-color;
        margin: 0;
        width: 100%;
        text-align: end;
      }
      .circle {
        position: absolute;
        background: $accent-gradient;
        border-radius: 50%;
        top: 6px;
        left: calc(100% + 1.5rem - 4px);
        width: 9px;
        height: 9px;
      }
    }
  }
  @media only screen and (max-width: 600px) {
    .container {
      display: none;
    }
  }
</style>
