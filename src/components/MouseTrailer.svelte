<script>
  const animateTrailer = (e, interacting) => {
    const trailer = document.getElementById("trailer")

    const x = e.clientX - trailer.offsetWidth / 2,
      y = e.clientY - trailer.offsetHeight / 2

    const keyframes = {
      transform: `translate(${x}px, ${y}px) scale(${interacting ? 2 : 1})`,
    }

    trailer.animate(keyframes, {
      duration: 200,
      fill: "forwards",
    })
  }

  const getTrailerClass = (type) => {
    switch (type) {
      case "info":
        return "fa-solid fa-info"
      default:
        return "fa-solid fa-arrow-up-right-from-square"
    }
  }

  window.onmousemove = (e) => {
    const trailer = document.getElementById("trailer")
    const interactable = e.target.closest(".interactable"),
      interacting = interactable !== null

    const icon = document.getElementById("trailer-icon")

    animateTrailer(e, interacting)

    trailer.dataset.type = interacting ? interactable.dataset.type : ""

    if (interacting) {
      const iconName = getTrailerClass(interactable.dataset.type)
      icon.className = iconName
      if (iconName.includes("info")) {
        trailer.style.backgroundColor = "gray"
        trailer.style.boxShadow =
          "0 0 8px 2px #78a4eb, 0 0 6px 1.5px lightblue inset"
      } else {
        trailer.style.backgroundColor = "orange"
        trailer.style.boxShadow =
          "0 0 8px 2px yellow, 0 0 6px 1.5px yellow inset"
      }
      trailer.style.opacity = 1
      document.body.style.cursor = "none"
    } else {
      trailer.style.opacity = 0
      document.body.style.cursor = "default"
    }
  }
</script>

<div id="trailer">
  <i id="trailer-icon" class="fa-thin fa-arrow-up-right-from-square" />
</div>

<style lang="scss">
  #trailer {
    border-radius: 50%;
    width: 16px;
    height: 16px;
    background-color: orange;
    box-shadow: 0 0 8px 2px yellow, 0 0 6px 1.5px yellow inset;
    position: fixed;
    left: 0px;
    top: 0px;
    z-index: 10000;

    pointer-events: none;
    opacity: 0;
    transition: opacity 500ms ease;

    display: grid;
    place-items: center;

    // size for the icon
    font-size: 0.5rem;
  }

  #trailer-icon {
    font-size: 0.5rem;
    line-height: 1;

    opacity: 0;
    transition: opacity 400ms ease;
  }

  #trailer:not([data-type=""]) > #trailer-icon {
    opacity: 1;
  }
</style>
