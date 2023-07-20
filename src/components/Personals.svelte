<script>
  import portrait from "../assets/portrait.png"
</script>

<div class="personals">
  <img class="portrait" src={portrait.src} alt="Portrait" />
  <div class="socials-and-contacts">
    <div class="contacts">
      <h3 class="text-gradient">Contact information</h3>
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
          class="interactable"
          target="_blank"
          rel="noreferrer"
          href="https://goo.gl/maps/wKAkkxq9MADzzhiL8">Vantaa, Finland</a
        >
      </span>
    </div>
    <div class="socials">
      <a target="_blank" rel="noreferrer" href="https://linkedin.com">
        <i class="fa-brands fa-linkedin interactable" />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/aleksiko28">
        <i class="fa-brands fa-square-github interactable" />
      </a>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/index.scss";
  .personals {
    height: 100%;
    padding: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 1.25rem;

    .portrait {
      backdrop-filter: blur(3px);
      background: $accent-gradient;
      background-size: 400%;
      width: 8rem;
      height: 8rem;
      border-radius: 50%;
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
        gap: 1.5rem;
        font-size: 2.5rem;
        color: $primary-color;
        align-self: flex-end;
        i {
          transition: transform $transition-fast ease;
          &:hover {
            cursor: pointer;
            transform: translateY(-5%) scale(1.25);
          }
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
        gap: 0.5rem;
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
        }
      }
    }
  }
</style>
