import Database from 'better-sqlite3';
import { DB_PATH } from '$env/static/private';
import type { Track } from './types';
const db = new Database(DB_PATH)
export function GET({ sql }):Track[] {
	const stmnt = db.prepare(sql);
	const rows = stmnt.all();
	return rows as Track[];
}