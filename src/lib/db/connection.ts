import Database from 'better-sqlite3';
import { DATABASE_URL } from '$env/static/private';
import { drizzle } from 'drizzle-orm/better-sqlite3';
import * as schema from './schema';

const sqlite = new Database(DATABASE_URL);

export const db = drizzle(sqlite, { schema });
