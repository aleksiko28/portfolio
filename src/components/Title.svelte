<script lang="ts">
  import arrow from "../assets/up-arrow.png"
</script>

<div class="title-page">
  <div class="header">
    <h1 class="first-row">Hello.</h1>
    <h1 class="second-row">
      My name is
      <span class="text-gradient">Aleksi Koivu</span>
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
  }
  h1 {
    padding-left: 2rem;
    font-size: 3rem;
    color: white;
    font-weight: 800;
    margin: 0;
    font-weight: 800;
  }
  .header {
    display: flex;
    flex-direction: column;
  }

  .first-row,
  .second-row {
    opacity: 0;
  }

  .first-row {
    animation: fadeIn 1s ease forwards;
    -webkit-animation: fadeIn 1s ease forwards;
  }

  .second-row {
    color: gray;
    animation: fadeInTwo 1.5s ease forwards;
    -webkit-animation: fadeInTwo 1.5s ease forwards;
    animation-delay: 1s;
    -webkit-animation-delay: 1s;
    background: -webkit-linear-gradient(white, #38495a);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
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

  @keyframes fadeIn {
    0% {
      opacity: 0;
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
    .down-arrow {
      bottom: 15%;
    }
  }
</style>
