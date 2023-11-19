import { eq } from 'drizzle-orm';
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
  get: async (id: number): Promise<Todo | undefined> => {
    return db.query.todos.findFirst({
      where: eq(TodosSchema.id, id)
    });
  },
  update: async (id: number, todo: Partial<Todo>) => {
    return db
      .update(TodosSchema)
      .set(todo)
      .where(eq(TodosSchema.id, id))
      .returning();
  },
  delete: async (id: number) => {
    //
  }
};
