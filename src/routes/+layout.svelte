<script lang="ts">
  import 'normalize.css';
</script>

<main>
  <slot />
</main>

<style lang="postcss">
  :global(html, body) {
    font-family: Helvetica, Arial, sans-serif;
    background-color: #f5f5f5;
  }

  main {
    max-width: 500px;
    margin: 0 auto;
  }
</style>
