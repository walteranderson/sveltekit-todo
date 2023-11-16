import { todos } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
  return {
    todos: await todos.list()
  };
};
