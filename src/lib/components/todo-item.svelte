<script lang="ts">
  import type { Todo } from '$lib/db';
  import IconCheckboxUnchecked from '~icons/ci/checkbox-unchecked';
  import IconCheckboxCheck from '~icons/ci/checkbox-check';
  import IconTrashFull from '~icons/ci/trash-full';
  import IconButton from './icon-button.svelte';
  import { enhance } from '$app/forms';

  export let todo: Todo;
</script>

<form method="POST" class="todo" use:enhance>
  <input type="hidden" name="id" value={todo.id} />

  <IconButton type="submit" formaction="/?/complete">
    {#if todo.completed}
      <IconCheckboxCheck />
    {:else}
      <IconCheckboxUnchecked />
    {/if}
  </IconButton>

  <p class:completed={todo.completed}>{todo.text}</p>

  <IconButton danger type="submit" formaction="/?/delete">
    <IconTrashFull />
  </IconButton>
</form>

<style lang="postcss">
  .todo {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      flex: 1;
      margin: 0;
      &.completed {
        text-decoration-line: line-through;
      }
    }
  }
</style>
