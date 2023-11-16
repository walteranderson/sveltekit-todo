<script lang="ts">
  import type { Todo } from '$lib/db';
  import IconCheckboxUnchecked from '~icons/ci/checkbox-unchecked';
  import IconCheckboxCheck from '~icons/ci/checkbox-check';
  import IconTrashFull from '~icons/ci/trash-full';

  export let todo: Todo;
</script>

<div class="todo">
  <span>
    {#if todo.completed}
      <IconCheckboxCheck />
    {:else}
      <IconCheckboxUnchecked />
    {/if}
  </span>

  <p>{todo.text}</p>

  <span>
    <IconTrashFull />
  </span>
</div>

<style lang="postcss">
  .todo {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;

    p {
      flex: 1;
      margin: 0;
    }

    span {
      display: flex;
      align-items: center;
      font-size: 1.25rem;
    }
  }
</style>
