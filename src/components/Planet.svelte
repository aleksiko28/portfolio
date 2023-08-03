<script lang="ts">
  export let name: string = "earth"
  export let noMask: boolean = false

  let maskStyle = noMask
    ? ``
    : `--mask: linear-gradient(
          to bottom,
          rgba(0, 0, 0, 1) 0,
          rgba(0, 0, 0, 1) 30%,
          rgba(0, 0, 0, 0) 75%,
          rgba(0, 0, 0, 0) 0
        )
        100% 50% / 100% 100% repeat-x;`
</script>

<div class="planet--{name}">
  <div style={maskStyle} class="planet__atmosphere">
    <div class="planet__surface" />
  </div>
</div>

<style lang="scss">
  @import "../styles/index.scss";

  :root {
    --mercury-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mercury2.jpg);
    --mercury-tilt: rotate(0.034deg);
    --mercury-day: 1407.6;
    --mercury-color: #999999;
    --venus-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/venus2.jpg);
    --venus-tilt: rotate(177.3deg);
    --venus-day: 5832.5;
    --venus-color: #e8cda2;
    --earth-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/earth.jpg);
    --earth-tilt: rotate(23.26deg);
    --earth-day: 23.9;
    --earth-color: #b3caff;
    --mars-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/mars.jpg);
    --mars-tilt: rotate(25.2deg);
    --mars-day: 24.6;
    --mars-color: #c07158;
    --jupiter-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/jupiter.jpg);
    --jupiter-tilt: rotate(3.1deg);
    --jupiter-day: 9.9;
    --jupiter-color: #c9b5a4;
    --saturn-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/saturn.jpg);
    --saturn-tilt: rotate(26.7deg);
    --saturn-day: 10.7;
    --saturn-color: #f0e2c4;
    --uranus-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/uranus2.jpg);
    --uranus-tilt: rotate(97.8deg);
    --uranus-day: 17.2;
    --uranus-color: #b8d8e1;
    --neptune-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/neptune.jpg);
    --neptune-tilt: rotate(28.3deg);
    --neptune-day: 16.1;
    --neptune-color: #5e73bb;
    --pluto-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/332937/pluto.jpg);
    --pluto-tilt: rotate(122.5deg);
    --pluto-day: 153.3;
    --pluto-color: #c3b6aa;
    --sun-image: url(../assets/sun-min.jpg);
    --sun-tilt: rotate(0deg);
    --sun-day: 80;
    --sun-color: #cc9f4c;
    --moon-image: url(../assets/moon-min.jpg);
    --moon-tilt: rotate(15deg);
    --moon-day: 60;
    --moon-color: #6e7b7c;
  }

  //List of planets - used for mixin interation and interpolation
  $solarSystem: (
    "mercury",
    "venus",
    "earth",
    "mars",
    "jupiter",
    "saturn",
    "uranus",
    "neptune",
    "pluto",
    "sun",
    "moon"
  );

  //Mixin for styling each planet
  @mixin planetization {
    @each $planet in $solarSystem {
      &--#{$planet} {
        .planet__atmosphere::before {
          box-shadow: inset 10px 0px 12px -2px rgba(255, 255, 255, 0.2),
            inset -70px 0px 50px 0px black,
            -5px 0px 10px -4px var(--#{$planet}-color);
        }
        .planet__surface {
          background-image: var(--#{$planet}-image);
          transform: var(--#{$planet}-tilt) scale(1.2);
          animation: planetRotate
            calc(var(--#{$planet}-day) * 0.8s)
            linear
            infinite;
        }
      }
    }
  }

  //Planet rotation animation
  @keyframes planetRotate {
    0% {
      background-position: 0% center;
    }
    100% {
      background-position: -200% center;
    }
  }

  .planet {
    @include planetization;
    /** Yellow glow if sun */
    &--#{sun} {
      .planet__atmosphere {
        transition: box-shadow $transition-medium
          cubic-bezier(0.25, 0.46, 0.45, 0.94);
        box-shadow: 0px 0px 10px 0px var(--sun-color),
          0px 0px 1000px -2px var(--sun-color);
      }
    }
    &--#{moon} {
      .planet__atmosphere {
        transition: box-shadow $transition-medium
          cubic-bezier(0.25, 0.46, 0.45, 0.94);

        box-shadow: 0px 0px 10px 0px var(--moon-color),
          0px 0px 1000px -2px var(--moon-color);
      }
    }
    &__atmosphere {
      height: 12rem;
      width: 12rem;
      position: relative;

      border-radius: 100px;
      overflow: hidden;

      -webkit-mask: var(--mask);
      mask: var(--mask);
      &::before {
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        background: radial-gradient(
          circle at 30% 50%,
          rgba(255, 255, 255, 0.3) 0%,
          rgba(255, 255, 255, 0) 65%
        );
      }
    }

    &__surface {
      position: absolute;
      height: 100%;
      width: 100%;
      z-index: -1;
      background-size: cover;
    }
  }
</style>
