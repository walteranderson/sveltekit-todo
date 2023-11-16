import type { InferInsertModel, InferSelectModel } from 'drizzle-orm';
import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const TodosSchema = sqliteTable('todos', {
  id: integer('id').primaryKey(),
  text: text('text'),
  completed: integer('completed', { mode: 'boolean' })
});

export type Todo = InferSelectModel<typeof TodosSchema>;
export type InsertTodo = InferInsertModel<typeof TodosSchema>;
