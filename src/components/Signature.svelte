<script lang="ts">
  let animated: boolean

  function calcPaths(totalDur?: number) {
    // get all SVG elements - lines and dots
    const paths: NodeListOf<SVGGeometryElement> =
      document.querySelectorAll(".signature__path")

    // prepare path length variable
    let len = 0
    // prepare animation delay length variable
    let delay = 0

    // escape if no elements found
    if (!paths.length) {
      return false
    }

    // set duration in seconds of animation to default if not set
    const totalDuration = totalDur || 5

    // calculate the full path length
    paths.forEach((path) => {
      const totalLen = path.getTotalLength()
      len += totalLen
    })

    paths.forEach((path) => {
      const pathElem = path
      // get current path length
      const totalLen = path.getTotalLength()
      // calculate current animation duration
      const duration = (totalLen / len) * totalDuration

      // set animation duration and delay
      pathElem.style.animationDuration = `${duration < 0.2 ? 0.2 : duration}s`
      pathElem.style.animationDelay = `${1.25 + delay}s`

      // set dash array and offset to path length - this is how you hide the line
      pathElem.setAttribute("stroke-dasharray", totalLen.toString())
      pathElem.setAttribute("stroke-dashoffset", totalLen.toString())

      // set delay for the next path - added .2 seconds to make it more realistic
      delay += duration + 0.1
    })

    animated = true

    return true
  }

  setTimeout(() => {
    calcPaths(3)
  }, 100)
</script>

<svg
  width="392"
  height="132"
  viewBox="0 0 392 132"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g id="Aleksi Koivu">
    <g id="Aleksi">
      <path
        id="A"
        d="M4 128C44.5 121 73.5 21.5 76 4C78.5 32.5 61 107 65.5 128"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="A-le"
        d="M31 112.5C87.5 106 97 53.5 100.5 12C93 43.8333 79.1 109.7 83.5 118.5C89 129.5 130.5 84 115.5 80C100.5 76 94.5 118 112.5 121C130.5 124 126.5 80.5 136 82.5"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />

      <path
        id="A-k"
        d="M142.5 18C142.333 47.3333 141 107.5 137 113.5M163 64.5C154.167 74.1667 135.7 92.9 132.5 90.5C128.5 87.5 166 107.5 167.5 101.5"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        id="A-s"
        d="M185.5 72.5C182 71.3333 173.6 70.1 168 74.5C161 80 191.5 100 182 115C172.5 130 157 101 167 95.5"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        id="A-i"
        d="M197.5 80C195 91.3333 191 115.2 195 120"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        id="A-dot"
        d="M199.087 70.0523L199.506 69.7955C200.556 69.1527 201.152 67.9721 201.047 66.7459L201.019 66.4233C200.963 65.7712 200.65 65.1682 200.149 64.7468L199.669 64.3432C199.005 63.7841 198.031 63.7987 197.383 64.3773V64.3773C197.038 64.6857 196.83 65.1185 196.804 65.5806L196.618 68.8889C196.593 69.3334 196.779 69.7636 197.12 70.0502V70.0502C197.53 70.3951 198.099 70.4788 198.591 70.2665L199.087 70.0523ZM199.087 70.0523C198.97 69.3427 198.904 68.7382 198.872 68.2325C198.802 67.1301 199.816 66.5761 200.843 66.9836V66.9836"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="4"
      />
    </g>
    <g id="Koivu">
      <path
        id="K-1"
        d="M247.5 26C247.667 55.8333 245.5 115.5 240.5 120.5"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        id="K-2"
        d="M289.5 41.5C296.5 49.5 252 124 236 93.5C251 97 281 135.5 287 107.5"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        id="K-o"
        d="M287 98C287 94 296.667 92.6667 301.5 92.5C302.7 92.4355 303.667 94.8065 304 96C305 101.667 305.6 114.2 300 119C293 125 287 103 287 98Z"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        id="K-i"
        d="M313.5 93C314 100.833 315.7 117 318.5 119"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        id="K-vu"
        d="M323 84C328 94.8334 338.5 116.5 340.5 116.5C343 116.5 350.5 89.5 351.5 89.5C352.5 89.5 354.175 121.162 360.5 118C367.5 114.5 378.5 86 376 84C373.5 82 385 121.5 387.5 118"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="8"
        stroke-linecap="round"
      />
      <path
        id="K-dot"
        d="M311.087 80.0523L311.506 79.7955C312.556 79.1527 313.152 77.9721 313.047 76.7459L313.019 76.4233C312.963 75.7712 312.65 75.1682 312.149 74.7468L311.669 74.3432C311.005 73.7841 310.031 73.7987 309.383 74.3773V74.3773C309.038 74.6857 308.83 75.1185 308.804 75.5806L308.618 78.8889C308.593 79.3334 308.779 79.7636 309.12 80.0502V80.0502C309.53 80.3951 310.099 80.4788 310.591 80.2665L311.087 80.0523ZM311.087 80.0523C310.97 79.3427 310.904 78.7382 310.872 78.2325C310.802 77.1301 311.816 76.5761 312.843 76.9836V76.9836"
        stroke="currentColor"
        class:animated
        class="signature__path"
        stroke-width="4"
      />
    </g>
  </g>
</svg>

<style lang="scss">
  path {
    transform: translateZ(0);
    filter: drop-shadow(1px 1px 4px var(--signature-color));
    -webkit-filter: drop-shadow(1px 1px 4px var(--signature-color));
    color: var(--signature-color);
  }

  svg {
    max-width: 80vw;
    margin-top: 2rem;
  }

  .signature__path {
    opacity: 0;
    animation-timing-function: linear;
    animation-fill-mode: forwards;
    &.animated {
      opacity: 1;
      animation-name: line;
    }
  }

  @keyframes line {
    100% {
      stroke-dashoffset: 0;
    }
  }
</style>
