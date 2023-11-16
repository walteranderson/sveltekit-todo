import type { Todo } from '$lib/types';
import { db } from './connection';

export const todos = {
  list: async (): Promise<Todo[]> => {
    return db.query.todos.findMany();
  },
  get: async (id: number) => {
    //
  },
  update: async (id: number, todo: any) => {
    //
  },
  delete: async (id: number) => {
    //
  }
};
