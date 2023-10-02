<script>
  import Signature from "./Signature.svelte"
  import campfire from "../assets/personal/campfire.webp"
  import campfireDay from "../assets/personal/campfire-day.webp"

  import { fade } from "svelte/transition"
  import { onMount } from "svelte"

  function navigateToAnchor(anchor) {
    lenis.scrollTo(`#${anchor}`, { offset: -96 })
  }

  let theme = "dark"

  onMount(async () => {
    const themeEl = document.getElementsByTagName("html")[0]
    const attrObserver = new MutationObserver((mutations) => {
      mutations.forEach((mu) => {
        if (mu.type === "attributes" && mu.attributeName === "data-theme") {
          theme = themeEl.dataset.theme
        }
      })
    })
    /** Observe if the class ´mo-theme-dark´ is added to DOM tree. */
    if (themeEl) {
      attrObserver.observe(themeEl, { attributes: true })
    }
  })
</script>

<div class="title-page">
  <div class="header">
    <div class="text-signature">
      <h1 class="header-text">
        <span class="first-row tracking-in-expand"> Hello. </span>
        <span class="second-row">My name is...</span>
        <span class="signature">
          <Signature />
        </span>
      </h1>
    </div>
    <div class="image-container">
      {#if theme === "dark"}
        <img
          transition:fade={{ delay: 50, duration: 250 }}
          class="campfire"
          src={campfire.src}
        />
      {:else}
        <img
          transition:fade={{ delay: 50, duration: 250 }}
          class="campfire"
          src={campfireDay.src}
        />
      {/if}
    </div>
  </div>

  <a
    class="down-arrow fade-in-bottom"
    href="#about"
    on:click={() => navigateToAnchor("about")}
  >
    <i class="fa-solid fa-arrow-down" />
  </a>
</div>

<style lang="scss">
  @import "../styles/index.scss";
  .title-page {
    position: relative;
    display: flex;
    height: 100dvh;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;

    .image-container {
      display: grid;
      overflow: hidden;
    }

    .campfire {
      height: 20rem;
      width: 20rem;
      grid-column: 1/2;
      grid-row: 1/2;
      -webkit-mask-image: radial-gradient(
        circle,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 45%,
        rgba(255, 255, 255, 0) 70%,
        rgba(255, 255, 255, 0) 100%
      );

      mask-image: radial-gradient(
        circle,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 1) 45%,
        rgba(255, 255, 255, 0) 70%,
        rgba(255, 255, 255, 0) 100%
      );
    }

    .text-gradient {
      @include gradient-text;
    }
  }
  h1,
  h2 {
    font-size: 2.5rem;
    transition: all $transition-medium ease;
    color: var(--body-text-color);
    font-weight: 400;
    margin: 0;
  }

  h2 {
    margin-top: 3rem;
    font-size: 2rem;
  }
  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap-reverse;
    gap: 3rem;
    width: 100%;

    .header-text {
      display: flex;
      width: max-content;
      flex-direction: column;
    }
    .text-signature {
      display: flex;
      flex-direction: column;
      width: max-content;
      align-items: flex-start;
    }
  }

  .first-row,
  .second-row {
    opacity: 0;
  }

  .first-row {
    color: var(--accent);
  }

  .second-row {
    top: 100%;
    color: var(--subtitle-color);
    animation: fadeInTwo 1.5s ease forwards;
    -webkit-animation: fadeInTwo 1.5s ease forwards;
    animation-delay: 1s;
    -webkit-animation-delay: 1s;
  }

  .down-arrow {
    position: absolute;
    bottom: 3dvh;
    font-size: 4rem;
    transition: 0.2s all ease;
    &:hover {
      scale: 1.1;
      cursor: pointer;
    }
  }

  .fade-in-bottom {
    -webkit-animation: fade-in-bottom 0.7s cubic-bezier(0.39, 0.575, 0.565, 1)
      both;
    animation: fade-in-bottom 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;
    animation-delay: 1s;
    -webkit-animation-delay: 1s;
  }

  .scale-in-center {
    -webkit-animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)
      both;
    animation: scale-in-center 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  .tracking-in-expand {
    -webkit-animation: tracking-in-expand 0.7s
      cubic-bezier(0.215, 0.61, 0.355, 1) both;
    animation: tracking-in-expand 0.7s cubic-bezier(0.215, 0.61, 0.355, 1) both;
  }

  @-webkit-keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes tracking-in-expand {
    0% {
      letter-spacing: -0.5em;
      opacity: 0;
    }
    40% {
      opacity: 0.6;
    }
    100% {
      opacity: 1;
    }
  }

  @keyframes fadeInTwo {
    0% {
      opacity: 0;
      filter: blur(3px);
      transform: translateY(-15%);
    }
    100% {
      opacity: 1;
      filter: blur(0);
      transform: translateY(0%);
    }
  }

  @-webkit-keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }
  @keyframes fade-in-bottom {
    0% {
      -webkit-transform: translateY(50px);
      transform: translateY(50px);
      opacity: 0;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media only screen and (max-width: 400px) {
    .title-page {
      .down-arrow {
        bottom: 2dvh;
      }
      .header {
        gap: 1rem;
        .campfire {
          width: 12rem;
          height: 12rem;
        }
      }
    }
  }
</style>
