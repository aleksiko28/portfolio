<script>
  import portrait from "../assets/portrait.png"
  import Button from "./Button.svelte"
</script>

<div class="personals">
  <div class="portrait">
    <img class="portrait" src={portrait.src} alt="Portrait" />
  </div>
  <div class="socials-and-contacts">
    <div class="contacts">
      <h3 class="contact-info">Contact information</h3>
      <span class="icon-text">
        <i class="fa-solid fa-envelope" />
        <a href="mailto:aleksi.koivu28@gmail.com">aleksi.koivu28@gmail.com</a>
      </span>
      <span class="icon-text">
        <i class="fa-solid fa-phone" />
        <a href="tel:+35840-875-7038">+358 40 875 7038</a>
      </span>
      <span class="icon-text">
        <i class="fa-solid fa-location-dot" />
        <a
          target="_blank"
          rel="noreferrer"
          href="https://goo.gl/maps/wKAkkxq9MADzzhiL8">Vantaa, Finland</a
        >
      </span>
    </div>
    <div class="socials">
      <Button target="_blank" rel="noreferrer" href="https://linkedin.com">
        LinkedIn <i class="fa-brands fa-linkedin" />
      </Button>
      <Button
        target="_blank"
        rel="noreferrer"
        href="https://github.com/aleksiko28"
      >
        GitHub <i class="fa-brands fa-square-github" />
      </Button>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/index.scss";
  .personals {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1.25rem;

    .portrait {
      backdrop-filter: blur(3px);
      position: relative;
      -webkit-backdrop-filter: blur(3px);
      background-size: 400%;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
      background-color: $background-color-button;
      &::before {
        content: "";
        top: 50%;
        left: 50%;
        width: calc(100% + 4px);
        height: calc(100% + 4px);
        position: absolute;
        border-radius: 50%;
        background-color: hsla(257, 0%, 0%, 1);
        transform: translate(-50%, -50%);
      }
    }
    .socials-and-contacts {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      .contacts {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        font-size: 0.875rem;
        gap: 0.25rem;

        .icon-text {
          justify-content: flex-start;
          display: flex;
          flex-direction: row-reverse;
          align-items: center;
          width: 100%;
          gap: 1rem;
          i {
            width: 16px;
            height: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            color: $secondary-color;
          }
        }
      }
      .socials {
        display: flex;
        gap: 1rem;
        margin-bottom: 1rem;
        color: $primary-color;
        align-self: flex-end;
        i {
          font-size: 1.25rem;
        }
      }
    }
  }
  @media only screen and (max-width: 1000px) {
    .personals {
      align-items: flex-end;
      justify-content: space-between;
      gap: 2rem;
      padding: 0;
      flex-direction: row-reverse;
      .portrait {
        align-self: center;
      }

      .socials-and-contacts {
        gap: 1.5rem;
        .contacts {
          width: 100%;
          align-items: flex-start;
          justify-content: space-between;
          .icon-text {
            flex-direction: row;
          }
        }
        .socials {
          align-self: flex-start;
          margin: 0;
        }
      }
    }
  }
</style>
