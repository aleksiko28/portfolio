<script lang="ts">
  import type { HTMLInputAttributes } from "svelte/elements"

  export let label: string = ""
  interface $$Props extends HTMLInputAttributes {
    label: string
  }
</script>

<label class="input-label">
  <span class="label">
    {label}
  </span>
  <textarea {...$$restProps} />
</label>

<style lang="scss">
  @import "../styles/index.scss";
  .input-label {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    .label {
      font-size: 0.875rem;
    }

    textarea {
      border-radius: $border-radius-input;
      padding: $padding-s;
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
  }
</style>
