<script lang="ts">
  import type { PageData } from './$types';
  import Button from '$lib/components/button.svelte';
  import TextInput from '$lib/components/text-input.svelte';
  import TodoItem from '$lib/components/todo-item.svelte';

  export let data: PageData;
</script>

<h1>SvelteKit Todos</h1>

{#if data.todos && data.todos.length > 0}
  {#each data.todos as todo}
    <TodoItem {todo} />
  {/each}
{:else}
  <p>No todos yet</p>
{/if}

<form method="POST" action="?/create">
  <TextInput type="text" name="text" placeholder="Add a todo" />
  <Button type="submit">Add</Button>
</form>

<style lang="postcss">
  h1 {
    text-align: center;
  }

  form {
    display: flex;
    gap: 1rem;
  }
</style>
