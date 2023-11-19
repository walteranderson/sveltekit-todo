<script lang="ts">
  export let danger = false;
</script>

<button on:click class:danger {...$$restProps}>
  <slot />
</button>

<style lang="postcss">
  button {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1.25rem;
    padding: 0.25rem;
    border: 0;
    border-radius: 0.25rem;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    background-color: unset;
    &:hover {
      background-color: rgb(229 231 235);
    }
  }

  .danger {
    color: rgb(239 68 68);
    &:hover {
      background-color: rgb(254 202 202);
    }
  }
</style>
