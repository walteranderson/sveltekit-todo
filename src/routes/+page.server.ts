import { Todos } from '$lib/db';
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
  }
} satisfies Actions;
