<script lang="ts">
  function animateProgress() {
    const bar = document.getElementById("progress-bar")

    if (document.scrollingElement) {
      const scrollDistance = document.scrollingElement.scrollTop
      const body = document.body,
        html = document.documentElement

      const height = Math.max(
        body.scrollHeight,
        body.offsetHeight,
        html.clientHeight,
        html.scrollHeight,
        html.offsetHeight
      )
      const scrollPercentage = Math.min(
        (scrollDistance / (height - window.screen.height)) * 100,
        100
      )
      if (bar) {
        bar.style.width = `calc(${scrollPercentage}% - 2rem)`
        if (document.scrollingElement.scrollTop > 300) {
          bar.style.opacity = "1"
        } else {
          bar.style.opacity = "0"
        }
      }
    }
  }
  window.addEventListener("scroll", () => {
    window.requestAnimationFrame(animateProgress)
  })
</script>

<div class="progress-bar-container">
  <div class="progress-bar" id="progress-bar" />
</div>

<style lang="scss">
  @import "../styles/index.scss";

  .progress-bar-container {
    width: 100%;
    position: relative;
    display: block;
    position: fixed;
    z-index: $z-index-progress-bar;
  }
  .progress-bar {
    height: 0.075rem;
    width: 100%;
    background: $body-text-color;
    opacity: 0;
    border-radius: $border-radius-pill;
  }
</style>
