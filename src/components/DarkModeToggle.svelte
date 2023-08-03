<script lang="ts">
  import Planet from "./Planet.svelte"
  let planetContainer: HTMLDivElement

  // get theme on page load
  const initialTheme = localStorage.getItem("theme")

  if (initialTheme) {
    document.querySelector("html")?.setAttribute("data-theme", initialTheme)
  }

  const planetAnimation = [
    {
      opacity: "1",
      filter: "blur(0)",
      easing: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
    },
    {
      opacity: ".5",
      filter: "blur(8px)",
      easing: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
    },
    {
      opacity: "1",
      filter: "blur(0)",
      easing: "cubic-bezier(0.250, 0.460, 0.450, 0.940)",
    },
  ]

  const planetTiming = {
    duration: 500,
    iterations: 1,
  }
  let darkMode = initialTheme !== "light"
  const nonCurrentTheme = darkMode ? "light" : "dark"
  let tooltipText = `Switch to ${nonCurrentTheme} mode`
  function handleClick() {
    const themeToSet = darkMode ? "light" : "dark"
    const currentTheme = darkMode ? "dark" : "light"
    planetContainer.setAttribute("data-after", `Switch to ${currentTheme} mode`)
    localStorage.setItem("theme", themeToSet)
    document.querySelector("html")?.setAttribute("data-theme", themeToSet)
    setTimeout(() => {
      darkMode = !darkMode
    }, 250)
    planetContainer.animate(planetAnimation, planetTiming)
  }
</script>

<div
  bind:this={planetContainer}
  class="dark-mode-toggle"
  on:keydown={handleClick}
  on:click={handleClick}
  data-after={tooltipText}
>
  <Planet noMask name={darkMode ? "moon" : "sun"} />
</div>

<style lang="scss">
  @import "../styles/index.scss";

  .dark-mode-toggle {
    position: absolute;
    top: 3rem;
    right: 3rem;
    width: 12rem;
    height: 12rem;
    z-index: calc($z-index-tooltip + -1);
    transition: $transition-fast all ease;
    box-shadow: inset 10px 0px 12px -2px rgba(255, 255, 255, 0.2),
      inset -70px 0px 50px 0px black, -5px 0px 10px -4px white;
    border-radius: 50%;
    scale: 0.6;

    &::after {
      content: attr(data-after);
      transition: all $transition-medium ease;
      position: absolute;
      color: var(--body-text-color);
      font-size: $font-size-xxl;
      left: 50%;
      pointer-events: none;
      background: var(--header-background-color);
      padding: $padding-s $padding-m;
      border-radius: $border-radius-pill;
      transform: translate(-50%, -3rem);
      white-space: nowrap;
      box-shadow: var(--button-shadow-hover);
      bottom: -3rem;
      opacity: 0;
    }
    &:hover {
      cursor: pointer;
      &::after {
        transform: translate(-50%, 1rem);
        opacity: 1;
      }
    }
  }
</style>
