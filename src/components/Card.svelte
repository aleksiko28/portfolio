<script lang="ts">
  export let title: string
  export let body: string
  export let href: string = ""
  export let rating: number
  export let image: string
  export let asterisk: boolean = false
  export let imageBackground: boolean = false

  import Rating from "./Rating.svelte"
</script>

<li class="link-card hidden" data-type="info">
  <a href={href !== "" ? href : undefined}>
    <span class:asterisk>*</span>
    <div class="card-content">
      <div class="image-rating">
        <!-- svelte-ignore a11y-missing-attribute -->
        <img class:imageBackground class="experience-image" src={image} />
        <Rating value={rating} />
      </div>
    </div>
    <div class="title-and-desc">
      <div class="padding">
        <h4>
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
  a {
    position: relative;
    span {
      position: absolute;
      display: none;
      color: white;
      font-size: 20px;
      right: 12px;
      top: 4px;
      &.asterisk {
        display: block;
      }
    }
  }
  .link-card {
    align-self: flex-start;
    list-style: none;
    transition: all $transition-medium ease;
    display: flex;
    padding: 0.15rem;
    backdrop-filter: blur(3px);
    background-color: rgba(28, 28, 28, 0.4);

    &.hidden {
      opacity: 0;
      filter: blur(5px);
      transform: translateX(-100%);
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

      justify-content: space-between;
      transition: all 0.7s ease;

      .image-rating {
        display: flex;
        flex-direction: column;
        position: relative;
        .experience-image {
          &.imageBackground {
            background: white;
            border-radius: 50%;
            outline: 4px solid white;
          }
          height: 3rem;
          object-fit: cover;
          margin-bottom: 1rem;
          align-self: center;
        }
      }
    }
  }

  .link-card:hover {
    transform: scale(1.05);
  }

  .link-card > a {
    width: 100%;
    position: relative;
    text-decoration: none;
    padding: 1rem 1.3rem;
    overflow: hidden;
    border-radius: 0.35rem;
    border: 1px solid rgba(var(--accent), 25%);

    &:hover .title-and-desc {
      bottom: 0;
    }

    .title-and-desc {
      width: 100%;
      position: absolute;
      display: flex;
      height: 100%;
      justify-content: center;
      backdrop-filter: blur(3px);
      background-color: rgba(0, 0, 0, 0.6);
      z-index: 999;
      gap: 0.5rem;
      flex-direction: column;
      transition: all 0.5s ease;
      z-index: 0;
      left: 0;
      bottom: -125%;
      overflow: hidden;
      .padding {
        padding: 1rem;
      }
    }
  }
  h4 {
    margin: 0;
    font-size: 1rem;
    margin-bottom: 0.25rem;
    color: $accent;
    transition: color 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  }
  p {
    margin: 0;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    color: $card-subtitle-color;
  }
</style>
