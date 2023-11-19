import { Todos } from '$lib/db';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad, Actions } from './$types';

export const load: PageServerLoad = async () => {
  return {
    todos: await Todos.list()
  };
};

export const actions = {
  create: async (event) => {
    const formData = await event.request.formData();
    const text = formData.get('text') as string;
    await Todos.create(text);
  },
  complete: async (event) => {
    const formData = await event.request.formData();
    const id = Number(formData.get('id'));
    const todo = await Todos.get(id);
    if (!todo) {
      return fail(400, { message: 'Todo not found' });
    }

    await Todos.update(id, {
      completed: !todo.completed
    });
  },
  delete: async (event) => {
    const formData = await event.request.formData();
    const id = Number(formData.get('id'));
    await Todos.delete(id);
  }
} satisfies Actions;
