<script>
  import Logo from "./Logo.svelte"
  import ScrollProgress from "./ScrollProgress.svelte"

  let shouldDim = false
  let isOpen = false
  let initialRender = true
  function checkScroll() {
    if (document.scrollingElement.scrollTop > 300) {
      initialRender = false
      shouldDim = true
    } else {
      shouldDim = false
    }
  }
  document.addEventListener("scroll", () => {
    checkScroll()
  })

  // check initial scroll pos
  checkScroll()
</script>

<nav class:initialRender class:isOpen class:shouldDim>
  <div class="navbar-content">
    <ul>
      <a class="anchor" href="#about">
        <li>
          <span><i class="fa-regular fa-address-card" /></span>
          <span class="navbar-text">About</span>
        </li>
      </a>
      <a class="anchor" href="#experience">
        <li>
          <span><i class="fa-regular fa-star" /></span>
          <span class="navbar-text">Experience</span>
        </li>
      </a>
      <a class="anchor" href="#work">
        <li>
          <span><i class="fa-regular fa-briefcase" /></span>
          <span class="navbar-text">Work</span>
        </li>
      </a>
      <a class="anchor" href="#education">
        <li>
          <span><i class="fa-regular fa-school" /></span>
          <span class="navbar-text">Education</span>
        </li>
      </a>
    </ul>
    <div class="scroll-progress">
      <ScrollProgress />
    </div>
  </div>
</nav>

<style lang="scss">
  @import "../styles/index.scss";

  a {
    color: unset;
  }

  /* Underline styles */
  a {
    text-decoration: none;
    display: block;
    position: relative;
    padding: 0.2em 0;
  }

  li {
    color: $subtle-body-text-color;
    display: flex;
    gap: 0.25rem;
    cursor: pointer;
    > span > i {
      background-image: var(--accent-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 400%;
      margin-right: 0.25rem;
      background-position: 0%;
    }
  }

  nav {
    position: fixed;
    top: 1rem;
    bottom: auto;
    left: 50%;
    display: flex;
    align-items: center;
    transform: translate3d(-50%, -80px, 0px) scale3d(1, 1, 1) rotateX(0deg)
      rotateY(0deg) rotateZ(0deg) skew(0deg);
    justify-content: center;
    border-radius: $border-radius-pill;
    background-color: rgba(255, 255, 255, 0.08);
    border: 1px solid rgba(255, 255, 255, 0.08);
    animation: jumpOut 500ms ease forwards;

    &.initialRender {
      display: none;
    }

    &.shouldDim {
      display: block;
      opacity: 1;
      backdrop-filter: blur(16px);
      -webkit-backdrop-filter: blur(16px);
      animation: dropIn 500ms ease forwards;
      transform-style: preserve-3d;
    }

    z-index: $z-index-navbar;
    transition: 0.3s all ease;
    .navbar-content {
      gap: 3rem;
      display: flex;
      padding: 0.5rem 1.5rem;
      align-items: center;
      position: relative;
      .scroll-progress {
        position: absolute;
        opacity: 0.8;
        bottom: calc(0.075rem - 1px);
        left: 1rem;
        width: 85%;
      }
    }
    ul {
      display: flex;
      margin: 0;
      padding: 0;
      gap: 2rem;
      justify-content: flex-end;
      list-style-type: none;
      li {
        i {
          transition: all $transition-fast ease;
          filter: none;
          transform: translateY(0%);
        }
        &:hover i {
          filter: drop-shadow(1px 5px 3px rgba(0, 0, 0, 0.9));
        }
      }
      .navbar-text {
        color: $subtle-body-text-color;
        transition: color $transition-fast ease;
        &:hover {
          color: $body-text-color;
        }
      }
    }
  }

  @keyframes dropIn {
    0% {
      transform: translate3d(-50%, -80px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg);
      opacity: 0;
    }

    50% {
      transform: translate3d(-50%, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg);
      opacity: 1;
    }

    100% {
      transform: translate3d(-50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg);
    }
  }

  @keyframes jumpOut {
    0% {
      transform: translate3d(-50%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg);
      opacity: 1;
    }

    50% {
      transform: translate3d(-50%, 10px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg);
      opacity: 1;
    }

    100% {
      transform: translate3d(-50%, -80px, 0px) scale3d(1, 1, 1) rotateX(0deg)
        rotateY(0deg) rotateZ(0deg) skew(0deg);
      opacity: 0;
    }
  }

  @media only screen and (max-width: 600px) {
    nav {
      width: 80%;
      .navbar-content {
        width: 100%;
        .scroll-progress {
          left: 0;
        }
      }
      i.menu-icon {
        display: flex;
      }
      ul {
        width: 100%;
        gap: 3rem;
        justify-content: space-between;
      }
    }
    i:not(.menu-icon) {
      font-size: 1.5rem;
      text-align: center;
    }

    .navbar-text {
      display: none;
    }
  }
</style>
