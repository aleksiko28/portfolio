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

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-10 0 400 135">
  <g id="Aleksi">
    <path
      id="A-a"
      class:animated
      class="signature__path"
      stroke="currentColor"
      stroke-width="8"
      d="M8.385 117.5c-14.5 7.5 11.2-5.5 16-11.5 4.8-6 17.167-20.667 21-27l10-22 10.803-31.419c.133-.387.25-.776.354-1.172a843.936 843.936 0 0 1 2.21-8.257c2.431-8.89 4.665-8.384 4.107.816l-.94 15.524c-.021.339-.052.67-.096 1.006-.263 2-1.363 10.08-3.936 25.502-3.002 18-4.505 35.552-4.664 42-.172 7-.002 16.333-.336 20.5-.333 4.167 1.196-32 1.196-32"
    />
    <path
      id="A-le"
      class:animated
      class="signature__path"
      stroke="currentColor"
      stroke-width="8"
      d="m28.885 100 32.452-9.68a16 16 0 0 0 5.038-2.542l11.006-8.27c1.33-1 2.495-2.2 3.455-3.558l1.304-1.845a16 16 0 0 0 2.542-5.717L89.387 47.5l3.972-20.85.057-.285c.441-2.098 5.848-27.78 2.969-13.865-2.683 12.967-14.96 71.118-17.526 83.27a15.729 15.729 0 0 0-.287 4.543l.507 6.336a6.329 6.329 0 0 0 8.742 5.337l6.645-2.769a15.983 15.983 0 0 0 5.16-3.455l4.723-4.723a16.027 16.027 0 0 0 1.871-2.25l3.896-5.666c.513-.747.962-1.537 1.342-2.36l1.827-3.958a9.523 9.523 0 0 0 .792-2.73l.493-3.693a3.73 3.73 0 0 0-5.653-3.67l-2.294 1.412a8.077 8.077 0 0 0-3.235 3.803l-1.76 4.274a16.038 16.038 0 0 0-1.029 3.723l-.535 3.58a15.953 15.953 0 0 0-.177 2.368v10.846a7.954 7.954 0 0 0 4.726 7.271l.432.192a9.5 9.5 0 0 0 3.859.819h.9c1.38 0 2.751-.222 4.059-.659l.312-.104a11.84 11.84 0 0 0 5.957-4.443 11.86 11.86 0 0 0 1.787-3.919l.688-2.755a16.13 16.13 0 0 1 .718-2.188l2.562-6.251.559-1.587a15.999 15.999 0 0 1 4.755-6.899l3.184-2.695"
    />
    <path
      id="A-k1"
      class:animated
      class="signature__path"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="8"
      d="M140.385 13 135 86.5"
    />
    <path
      id="A-k1-2"
      class:animated
      class="signature__path"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="8"
      d="m136 77.5-3 33.5"
    />
    <path
      id="A-k2"
      class:animated
      class="signature__path"
      stroke="currentColor"
      stroke-width="8"
      d="m134 87 15.885-14.5 10-11-24.701 25.634a2 2 0 0 0 .462 3.132L145.885 96l19.5 14.5"
    />
    <path
      id="A-s"
      class:animated
      class="signature__path"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="8"
      d="m149 98.5 3.164 1.582a16.01 16.01 0 0 1 3.381 2.27l1.563 1.368a15.703 15.703 0 0 1 1.658 1.685l2.808 3.318a6.428 6.428 0 0 0 4.908 2.277v0c.998 0 1.983-.232 2.876-.679L171 109.5l2.68-1.787a7.535 7.535 0 0 0 2.708-3.211v0a7.543 7.543 0 0 0 .36-5.134l-.603-2.112a13.59 13.59 0 0 0-2.009-4.165L173 91.5l-1.765-3.177a7.672 7.672 0 0 0-1.917-2.269v0a7.685 7.685 0 0 1-2.073-2.564L166 81l-1.323-2.316a6.583 6.583 0 0 1-.828-2.54l-.057-.517a5.499 5.499 0 0 1 1.577-4.496v0a5.51 5.51 0 0 1 1.429-1.03l2.823-1.412a6.533 6.533 0 0 1 2.921-.689v0c.635 0 1.267.093 1.876.275l2.355.707A5.006 5.006 0 0 1 179.5 71v0"
    />
    <path
      id="A-i"
      class:animated
      class="signature__path"
      stroke="currentColor"
      stroke-linecap="round"
      stroke-width="8"
      d="m190 77-2.292 8.269a8.036 8.036 0 0 0-.268 1.523l-.94 12.226v4l-.5 4v3.482"
    />
    <path
      id="A-dot"
      class:animated
      class="signature__path"
      stroke="currentColor"
      stroke-width="4"
      d="m193.237 64.052.42-.257a3.25 3.25 0 0 0 1.54-3.05l-.028-.322a2.47 2.47 0 0 0-.869-1.676l-.48-.404a1.746 1.746 0 0 0-2.866 1.237l-.185 3.309a1.414 1.414 0 0 0 1.972 1.378l.496-.215Zm0 0a18.644 18.644 0 0 1-.214-1.82c-.071-1.102.943-1.656 1.97-1.248"
    />
    <g id="Koivu">
      <path
        id="K1"
        class:animated
        class="signature__path"
        stroke="currentColor"
        stroke-width="8"
        d="M244 19.096c-4.506-7.885-1.398-2.517.429.646a7.99 7.99 0 0 1 1.071 3.997v9.857l.5 8-.5 10.5-1.5 20.5-1.5 8.5-.5 4-1 15-.717 7.167a7.78 7.78 0 0 1-2.329 4.814l-.877.849a.628.628 0 0 0-.125.169l-.062.124a.54.54 0 0 0 .483.781c.083 0 .166.019.241.057l.056.028a.804.804 0 0 0 1.123-.465l.178-.533c.019-.058.043-.114.07-.169l.027-.055a2.147 2.147 0 0 0 .074-1.759l-.642-1.604"
      />
      <path
        id="K-o"
        class:animated
        class="signature__path"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="8"
        d="M285.5 96.596v1.933a7.098 7.098 0 0 1-1.643 4.54v0c-.567.679-1 1.458-1.28 2.297l-.145.433a7.999 7.999 0 0 1-5.854 5.28l-1.38.307a8 8 0 0 1-5.976-1.026l-1.222-.764-6.5-5-7-5.5-18.882-17.5c-.006-.005-.006-.005 0 0v0c.287.257.594.485.89.681.936.621 1.889 1.243 2.657 2.064L243 88.438v0a7.265 7.265 0 0 0 9.942-.062l4.891-4.646a7.993 7.993 0 0 0 1.173-1.402L263.5 75.5l6-9 4.5-9 2.5-6 2.107-4.215a8.03 8.03 0 0 0 .606-1.637L280.5 40.5 282 35l.845-4.223a8.024 8.024 0 0 0 .155-1.57V21.5m2.5 75.096v-.88c0-.742.104-1.482.308-2.197l.313-1.094a8.005 8.005 0 0 1 1.182-2.453l.28-.391a8 8 0 0 1 3.7-2.84l.359-.135a7.997 7.997 0 0 1 2.809-.51h.602c1.887 0 3.697.75 5.031 2.084v0c.277.277.53.577.758.895l.668.935a8 8 0 0 1 1.49 4.65v.888c0 .696-.091 1.389-.27 2.061l-1.73 6.487-1.396 4.187a4.488 4.488 0 0 1-.252.609v0a4.646 4.646 0 0 1-5.744 2.289l-.231-.084a4.923 4.923 0 0 1-2.256-1.673L289 106.596l-1.17-1.95a7.92 7.92 0 0 1-.568-1.145l-.489-1.223a7.955 7.955 0 0 1-.417-1.402l-.856-4.28Z"
      />
      <path
        id="K-i"
        class:animated
        class="signature__path"
        stroke="currentColor"
        stroke-width="8"
        d="M310.5 87.096c-2.248-12.14.356 1.6.903 4.49.066.344.107.686.126 1.036l.471 8.474v.932c0 .378.027.757.08 1.131l.273 1.909c.098.683.281 1.345.551 1.98 1.182 2.787 4.328 10.171.596 1.048"
      />
      <path
        id="K-v"
        class:animated
        class="signature__path"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="8"
        d="m321.27 85.631 2 4.5 4.5 9.5 3.476 6.083c.349.61.75 1.189 1.2 1.729l1.824 2.188v0c1.178 1.178 3.178.758 3.781-.795l2.219-5.705 2.158-3.957a11.997 11.997 0 0 0 1.206-3.262L347 80"
      />
      <path
        id="K-u"
        class:animated
        class="signature__path"
        stroke="currentColor"
        stroke-linecap="round"
        stroke-width="8"
        d="M373 110.404V102l.17-4.5L373 91l-.969-9.688a1.133 1.133 0 0 0-.218-.563v0c-.651-.877-2.043-.416-2.043.676v.443c0 .088-.009.175-.027.262l-3.422 16.37a11.99 11.99 0 0 1-1.026 2.936l-1.627 3.235a8.179 8.179 0 0 1-1.761 2.338l-2.203 2.034a4.85 4.85 0 0 1-6.485.086v0a4.848 4.848 0 0 1-1.146-1.483l-1.153-2.309a9.028 9.028 0 0 1-.856-2.743l-.794-5.56L347 81"
      />
      <path
        id="K-dot"
        class:animated
        class="signature__path"
        stroke="currentColor"
        stroke-width="4"
        d="m303.5 69.596.393.295a3.25 3.25 0 0 0 3.403.307l.29-.144a2.468 2.468 0 0 0 1.237-1.427l.198-.595a1.744 1.744 0 0 0-2.207-2.207l-3.143 1.048a1.415 1.415 0 0 0-.553 2.342l.382.381Zm0 0a18.51 18.51 0 0 1 1.612-.87c.999-.472 1.888.266 1.888 1.37"
      />
    </g>
  </g>
</svg>

<style lang="scss">
  path {
    filter: drop-shadow(1px 1px 4px var(--signature-color));
    color: var(--signature-color);
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
