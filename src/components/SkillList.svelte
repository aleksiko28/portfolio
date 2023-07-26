<script lang="ts">
  import Card from "../components/Card.svelte"
  import Button from "./Button.svelte"
  import Select from "./Select.svelte"

  interface skill {
    title: string
    image: string
    body: string
    rating: number
    imageBackground?: boolean
    asterisk?: boolean
  }

  export let skills: skill[]

  $: sortedSkills = skills

  let alphDesc = false
  let numDesc = false

  function sortByTitle() {
    if (!alphDesc) {
      sortedSkills = sortedSkills.sort((a, b) => a.title.localeCompare(b.title))
      alphDesc = !alphDesc
    } else {
      sortedSkills = sortedSkills
        .sort((a, b) => a.title.localeCompare(b.title))
        .reverse()
      alphDesc = !alphDesc
    }
  }

  function sortByRating() {
    if (!numDesc) {
      sortedSkills = sortedSkills.sort((a, b) => b.rating - a.rating)
      numDesc = !numDesc
    } else {
      sortedSkills = sortedSkills.sort((a, b) => b.rating - a.rating).reverse()
      numDesc = !numDesc
    }
  }

  let inputValue: HTMLInputElement
  let filteredSkills = skills

  function filterSkills() {
    filteredSkills = sortedSkills.filter((skill) =>
      skill.title.toLowerCase().includes(inputValue.value.toLowerCase())
    )
  }
</script>

<div>
  <div class="filters">
    <input
      bind:this={inputValue}
      on:input={filterSkills}
      placeholder="Search..."
    />
    <div class="sort-icons">
      <!-- <Select /> -->
      <Button on:keydown={sortByTitle} on:click={sortByTitle}>
        <span
          class="fa-solid {alphDesc ? 'fa-arrow-up-z-a' : 'fa-arrow-down-a-z'}"
        />
      </Button>
      <Button on:keydown={sortByRating} on:click={sortByRating}>
        <span
          class="fa-solid {numDesc ? 'fa-arrow-up-1-9' : 'fa-arrow-down-9-1'}"
        />
      </Button>
    </div>
  </div>
  <ul
    role="list"
    class="exp-card-grid"
    class:filtered={filteredSkills.length !== skills.length}
  >
    {#each sortedSkills as skill}
      <Card
        title={skill.title}
        image={skill.image}
        body={skill.body}
        rating={skill.rating}
        imageBackground={skill.imageBackground}
        asterisk={skill.asterisk}
        hidden={!filteredSkills.includes(skill)}
      />
    {/each}
  </ul>
</div>

<style lang="scss">
  @import "../styles/index.scss";

  .exp-card-grid {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
    padding: 0;
    &.filtered {
      display: flex;
      flex-wrap: wrap;
    }
  }
  .filters {
    display: flex;
    padding: 1rem;
    justify-content: space-between;
    align-items: center;

    input {
      border-radius: $border-radius-input;
      padding: 0.5rem 1rem;
      font-family: $body-font;
      background-color: transparent;
      border: 1px solid gray;
      color: $body-text-color;
      &:focus {
        outline: none;
      }
      &:focus-visible {
        border-color: $accent;
      }
    }

    .sort-icons {
      display: flex;
      gap: 0.5rem;
      font-size: 1.25rem;
      height: 100%;

      a {
        transition: $transition-fast all ease;
        &:hover {
          cursor: pointer;
          color: $accent;
        }
      }
    }
  }
</style>
