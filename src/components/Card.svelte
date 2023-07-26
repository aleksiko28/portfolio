<script lang="ts">
  export let title: string
  export let body: string
  export let href: string = ""
  export let rating: number
  export let image: string
  export let asterisk: boolean = false
  export let imageBackground: boolean = false
  export let hidden: boolean = false

  import Rating from "./Rating.svelte"
</script>

<li class:hidden class="link-card">
  <a href={href !== "" ? href : undefined}>
    <span class:asterisk>*</span>
    <div class="card-content">
      <div class="image-rating">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class:imageBackground class="experience-image" src={image} />
        <Rating value={rating} />
      </div>
    </div>
    <div class="title-and-desc info">
      <div class="padding">
        <h4 class="text-gradient">
          {title}
        </h4>
        <p>
          {body}
        </p>
      </div>
    </div>
  </a>
</li>

<style lang="scss">
  @import "../styles/index.scss";

  $duration: 350ms;
  $timing-fn: ease;

  .hidden {
    display: none;
    height: 0;
    width: 0;
  }

  a {
    position: relative;
    aspect-ratio: 1;
    span {
      pointer-events: none;
      position: absolute;
      display: none;
      color: white;
      font-size: 1.5rem;
      right: 0.75rem;
      top: 0.25rem;
      &.asterisk {
        display: block;
      }
    }
  }
  .link-card {
    align-self: flex-start;
    list-style: none;
    display: flex;

    &.hidden {
      opacity: 0;
      filter: blur(5px);
      transform: translateX(-75%);
    }

    &.visible {
      opacity: 1;
      filter: blur(0);
      transform: translateX(0);
    }

    .card-content {
      position: relative;
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: center;
      pointer-events: none;
      padding: 1rem 1.3rem;

      .image-rating {
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        .experience-image {
          &.imageBackground {
            background: white;
            border-radius: 50%;
            outline: 4px solid white;
          }
          height: 2.5rem;
          object-fit: cover;
          margin-bottom: 1rem;
          align-self: center;
        }
      }
    }
  }

  .link-card > a {
    width: 100%;
    position: relative;
    text-decoration: none;
    overflow: hidden;
    outline: 1px solid rgba(var(--accent), 25%);

    &:hover .title-and-desc {
      bottom: 0;
    }
  }
  h4 {
    margin: 0;
    line-height: 1.5;
    font-size: 0.875rem;
  }
  p {
    font-size: 0.75rem;
    line-height: 1.5;
    margin: 0;
    color: $card-subtitle-color;
  }

  /* the important bits */
  li {
    perspective: 400px;
  }

  .info {
    // hide-initial-state
    transform: rotate3d(1, 0, 0, 90deg);
    width: 100%;
    height: 100%;
    padding: 1rem;
    display: flex;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    pointer-events: none;
    background-color: rgba(0, 0, 0, 0.85);
  }

  .in-top {
    a {
      .info {
        transform-origin: 50% 0%;
        animation: in-top $duration $timing-fn 0ms 1 forwards;
      }
    }
  }
  .in-right {
    a {
      .info {
        transform-origin: 100% 0%;
        animation: in-right $duration $timing-fn 0ms 1 forwards;
      }
    }
  }
  .in-bottom {
    a {
      .info {
        transform-origin: 50% 100%;
        animation: in-bottom $duration $timing-fn 0ms 1 forwards;
      }
    }
  }
  .in-left {
    a {
      .info {
        transform-origin: 0% 0%;
        animation: in-left $duration $timing-fn 0ms 1 forwards;
      }
    }
  }

  .out-top {
    a {
      .info {
        transform-origin: 50% 0%;
        animation: out-top $duration $timing-fn 0ms 1 forwards;
      }
    }
  }
  .out-right {
    a {
      .info {
        transform-origin: 100% 50%;
        animation: out-right $duration $timing-fn 0ms 1 forwards;
      }
    }
  }
  .out-bottom {
    a {
      .info {
        transform-origin: 50% 100%;
        animation: out-bottom $duration $timing-fn 0ms 1 forwards;
      }
    }
  }
  .out-left {
    a {
      .info {
        transform-origin: 0% 0%;
        animation: out-left $duration $timing-fn 0ms 1 forwards;
      }
    }
  }

  @keyframes in-top {
    from {
      transform: rotate3d(-1, 0, 0, 90deg);
    }
    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }
  @keyframes in-right {
    from {
      transform: rotate3d(0, -1, 0, 90deg);
    }
    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }
  @keyframes in-bottom {
    from {
      transform: rotate3d(1, 0, 0, 90deg);
    }
    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }
  @keyframes in-left {
    from {
      transform: rotate3d(0, 1, 0, 90deg);
    }
    to {
      transform: rotate3d(0, 0, 0, 0deg);
    }
  }

  @keyframes out-top {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(-1, 0, 0, 104deg);
    }
  }
  @keyframes out-right {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(0, -1, 0, 104deg);
    }
  }
  @keyframes out-bottom {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(1, 0, 0, 104deg);
    }
  }
  @keyframes out-left {
    from {
      transform: rotate3d(0, 0, 0, 0deg);
    }
    to {
      transform: rotate3d(0, 1, 0, 104deg);
    }
  }

  li {
    position: relative;
    float: left;
    padding: 0;
    list-style: none;

    a {
      display: inline-block;
      vertical-align: top;
      text-decoration: none;
    }
  }

  * {
    box-sizing: border-box;
  }
</style>
