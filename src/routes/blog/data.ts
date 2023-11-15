import Database from 'better-sqlite3';
import type { Track } from './types';
import { DATE } from 'sequelize';
const db = new Database("static/database/MyDB.db")
export function blogPages(): Track[] {
	const sql = `SELECT * FROM blogPage ORDER BY date DESC`;
	const stmnt = db.prepare(sql);
	const rows = stmnt.all();
	return rows as Track[];
}
export function blogPage(slug:string): Track[] {
	const sql = `SELECT * FROM blogPage WHERE blogPage.slug = $slug ORDER BY date DESC`;
	const stmnt = db.prepare(sql);
	const rows = stmnt.all({slug});
	return rows as Track[];
}
export function postComment(slug:string): Track[] {
	const sql = `SELECT * FROM blogPage INNER JOIN blogComment ON blogPage.slug = blogComment.cslug  WHERE blogComment.cslug = $slug ORDER BY blogComment.cdate DESC`;
	const stmnt = db.prepare(sql);
	const rows = stmnt.all({ slug });
	return rows as Track[];
}
export async function addPost(stuff:any) {
	const sql = `INSERT INTO blogPage (slug, title, mode, titleVisual, text, date) VALUES($stuff.slug,$stuff.title,$stuff.mode,$stuff.titleVisual,$stuff.text, $date)`;
	const insert = db.prepare(sql);
	insert.run({ stuff, date: new DATE });
}
export async function addComment(stuff: any) {
	const sql = `INSERT INTO blogComment (cslug, cname, ctext, cdate) VALUES (?, ?, ?, ?)`;
	const insert = db.prepare(sql);
	const currentDate = new Date();
	const result = insert.run(stuff.slug, stuff.name, stuff.text, currentDate.toISOString());
	return result;
}