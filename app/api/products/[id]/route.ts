import { NextResponse } from 'next/server';
import { productsJSON } from '../data/items.js';

export async function GET(req: Request) {
	const { pathname } = new URL(req.url);
	const el = pathname.split('/');
	const id = Number(el[el.length - 1]);
	const state = productsJSON.find((item) => item.id === id);

	return NextResponse.json(state);
}
