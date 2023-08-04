<script lang="ts">
  import arrow from "../assets/up-arrow.png"
  import Signature from "./Signature.svelte"
</script>

<div class="title-page">
  <div class="header">
    <h1 class="first-row tracking-in-expand">Hello.</h1>
    <h1 class="second-row">
      <span>My name is</span>
      <span class="signature">
        <Signature />
      </span>
    </h1>
  </div>
  <a class="down-arrow fade-in-bottom" href="#about">
    <img src={arrow.src} alt="An arrow pointing down." />
  </a>
</div>

<style lang="scss">
  @import "../styles/index.scss";
  .title-page {
    position: relative;
    display: flex;
    height: 100vh;
    gap: 2rem;
    align-items: center;
    justify-content: center;
    margin-bottom: 5rem;

    .text-gradient {
      @include gradient-text;
    }
  }
  h1,
  h2 {
    font-size: 3rem;
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
    position: relative;
    flex-direction: column;
    padding-left: 1rem;
  }

  .first-row,
  .second-row {
    opacity: 0;
  }

  .first-row {
    color: var(--accent);
  }

  .second-row {
    position: relative;
    top: 100%;
    color: var(--subtitle-color);
    animation: fadeInTwo 1.5s ease forwards;
    -webkit-animation: fadeInTwo 1.5s ease forwards;
    animation-delay: 1s;
    -webkit-animation-delay: 1s;
    margin-right: 20rem;
    .signature {
      position: absolute;
      width: 20rem;
      left: calc(100% + 1rem);
      bottom: -0.5rem;
    }
  }

  .down-arrow {
    position: absolute;
    bottom: 5%;
    rotate: 180deg;
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

  @media only screen and (max-width: 600px) {
    .second-row {
      margin-right: 0;
      .signature {
        left: 0;
        top: calc(100% + 1rem);
      }
    }
  }

  @media only screen and (max-width: 400px) {
    .down-arrow {
      bottom: 15%;
    }
  }
</style>
