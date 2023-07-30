<script lang="ts">
  import portrait from "../assets/portrait.png"
  import Button from "./Button.svelte"
  import List from "./List.svelte"

  const information = [
    { key: "Phone no.", value: "+358 40 875 7038" },
    { key: "Email", value: "aleksi.koivu28@gmail.com" },
    { key: "Website", value: "aleksikoivu.dev" },
  ]
</script>

<div class="personals">
  <div class="socials-and-contacts">
    <div class="contacts">
      <div class="top-container">
        <div class="portrait-and-info">
          <img class="portrait" src={portrait.src} alt="Portrait" />
          <div class="top-info">
            <h3>Aleksi Koivu</h3>
            <span class="icon-text">
              <i class="fa-solid fa-location-dot" />
              <span>Vantaa, Finland</span>
            </span>
          </div>
        </div>
        <div class="phone-and-email">
          <Button href="tel:+358408757038">
            <i class="fa-solid fa-phone" />
          </Button>
          <Button href="mailto:aleksi.koivu28@gmail.com">
            <i class="fa-solid fa-envelope" />
          </Button>
        </div>
      </div>
    </div>
    <div class="socials">
      <div class="contact-information">
        <List items={information} />
      </div>
      <div class="social-buttons">
        <Button target="_blank" rel="noreferrer" href="https://linkedin.com">
          <i class="fa-brands fa-linkedin" />
          LinkedIn
        </Button>
        <Button
          target="_blank"
          rel="noreferrer"
          href="https://github.com/aleksiko28"
        >
          <i class="fa-brands fa-square-github" />
          GitHub
        </Button>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "../styles/index.scss";
  .personals {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 1.25rem;

    .header {
      margin-top: 0;
    }

    .top-container {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      .portrait-and-info {
        display: flex;
        gap: 2rem;
        height: 100%;
        align-items: center;

        .top-info {
          display: flex;
          gap: 0.5rem;
          flex-direction: column;

          .icon-text {
            display: flex;
            gap: 0.75rem;
            color: gray;
          }

          h3 {
            margin: 0;
          }
        }
        .portrait {
          width: 5rem;
          height: 5rem;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.08);
          background-color: $background-color-button;
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }
      }

      .phone-and-email {
        display: flex;
        gap: 1rem;
      }
    }

    .socials-and-contacts {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      width: 100%;
      justify-content: space-between;
      height: 100%;

      .contacts {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
        font-size: 0.875rem;
        gap: 1.5rem;
      }
      .socials {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        color: $primary-color;

        .social-buttons {
          display: flex;
          justify-content: flex-end;
          gap: 1rem;
        }
        i {
          font-size: 1.25rem;
        }

        .contact-information {
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 0.5rem;
          height: 100%;
        }

        .icon-text {
          justify-content: flex-start;
          display: flex;
          flex-direction: row;
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
    }
  }
</style>
