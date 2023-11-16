import Database from 'better-sqlite3';
import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/better-sqlite3';

const sqlite = new Database(DATABASE_URL);
const db = drizzle(sqlite);

export const todos = {
  list: async () => {
    //
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
