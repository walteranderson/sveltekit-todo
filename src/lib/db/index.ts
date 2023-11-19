import type { Todo } from './types';
import { db } from './connection';
import { todos as TodosSchema } from './schema';

export type { Todo };

export const Todos = {
  list: async (): Promise<Todo[]> => {
    return db.query.todos.findMany();
  },
  create: async (text: string) => {
    return db
      .insert(TodosSchema)
      .values({
        text,
        completed: false
      })
      .returning();
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
