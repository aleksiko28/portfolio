<script>
  import Logo from "./Logo.svelte"
  let shouldDim = false
  let isOpen = false
  document.addEventListener("scroll", () => {
    if (document.scrollingElement.scrollTop > 300) {
      shouldDim = true
    } else {
      shouldDim = false
    }
  })
  $: icon_class = isOpen
    ? "fa-regular fa-close menu-icon"
    : "fa-regular fa-bars menu-icon"
  $: menu_class = isOpen ? "drawer-menu open" : "drawer-menu"

  function toggleMenu() {
    isOpen = !isOpen
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }
</script>

<nav class:isOpen class:shouldDim>
  <div class="navbar-content">
    <a href="#top">
      <Logo />
    </a>
    <div class="desktop-list">
      <ul>
        <a class="anchor" href="#about">
          <li><span><i class="fa-regular fa-address-card" /></span> About</li>
        </a>
        <a class="anchor" href="#experience">
          <li><span><i class="fa-regular fa-star" /></span> Experience</li>
        </a>
        <a class="anchor" href="#work">
          <li><span><i class="fa-regular fa-briefcase" /></span> Work</li>
        </a>
        <a class="anchor" href="#education">
          <li><span><i class="fa-regular fa-school" /></span> Education</li>
        </a>
      </ul>
    </div>
    <i on:click={toggleMenu} on:keydown={toggleMenu} class={icon_class} />
  </div>
</nav>

<div class={menu_class}>
  <ul>
    <a on:click={toggleMenu} class="anchor" href="#about">
      <li><span><i class="fa-regular fa-address-card" /></span> About</li>
    </a>
    <a on:click={toggleMenu} class="anchor" href="#experience">
      <li><span><i class="fa-regular fa-star" /></span> Experience</li>
    </a>
    <a on:click={toggleMenu} class="anchor" href="#work">
      <li><span><i class="fa-regular fa-briefcase" /></span> Work</li>
    </a>
    <a on:click={toggleMenu} class="anchor" href="#education">
      <li><span><i class="fa-regular fa-school" /></span> Education</li>
    </a>
  </ul>
</div>

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

  /* Fade in */
  a::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 0.1em;
    background-image: $accent-gradient;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
  }

  a:hover::after,
  a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
  }

  /* Slide in */
  a {
    overflow: hidden;
  }

  a::after {
    opacity: 1;
    transform: translate3d(-100%, 0, 0);
  }

  a:hover::after,
  a:focus::after {
    transform: translate3d(0, 0, 0);
  }
  li {
    color: $subtle-body-text-color;
    cursor: pointer;
    > span {
      background-image: var(--accent-gradient);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      background-size: 400%;
      margin-right: 0.25rem;
      background-position: 0%;
    }
  }

  .drawer-menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100% - 4rem);
    z-index: $z-index-drawer;
    width: 100%;
    transform: translateX(100%);
    height: 100%;
    top: 4rem;
    transition: transform $transition-fast ease;
    backdrop-filter: blur(5px);
    background: linear-gradient(
      0deg,
      rgba(9, 33, 35, 0.9) 0%,
      rgba(0, 0, 0, 0.9) 100%
    );

    ul {
      gap: 2rem;
      list-style-type: none;
      color: $body-text-color;
      display: flex;
      flex-direction: column;
      padding: 0;
      font-size: 2rem;
    }
    &.open {
      transform: translateX(0);
    }
  }
  nav {
    position: sticky;
    top: 0;
    opacity: 0;
    height: 3rem;
    display: flex;
    padding: $padding-s 2rem;
    justify-content: center;

    &.shouldDim {
      opacity: 1;
      backdrop-filter: blur(5px);
      background-color: rgba(0, 0, 0, 0.7);
    }
    &.isOpen {
      opacity: 1;
      background-color: rgba(0, 0, 0, 1);
    }
    z-index: $z-index-navbar;
    transition: 0.3s all ease;
    .navbar-content {
      display: flex;
      max-width: 1100px;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      .menu-icon {
        font-size: 2.5rem;
        color: $body-text-color;
        display: none;
        &:hover {
          cursor: pointer;
        }
      }
    }
    ul {
      display: flex;
      gap: 2rem;
      justify-content: flex-end;
      list-style-type: none;
    }
  }
  @media only screen and (max-width: 1000px) {
    nav {
      height: 4rem;
      padding: 0 2rem;
    }
  }
  @media only screen and (max-width: 600px) {
    .navbar-content {
      i.menu-icon {
        display: flex;
      }
    }
    i:not(.menu-icon) {
      width: 4rem;
      text-align: center;
    }
    .desktop-list {
      display: none;
    }
  }
</style>
