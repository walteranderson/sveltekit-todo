<button on:click {...$$restProps}>
  <slot />
</button>

<style lang="postcss">
  button {
    cursor: pointer;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    background-color: rgb(21 128 61);
    color: white;
    border: 0;
    border-radius: 0.25rem;
    transition-property: background-color;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;

    &:hover {
      background-color: rgb(22 163 74);
    }
  }
</style>
