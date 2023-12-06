import { NextResponse } from 'next/server';
import { productsJSON } from './data/items.js';

export async function GET(req: Request) {
	const { searchParams } = new URL(req.url);
	const limit = searchParams.get('limit');

	let state = productsJSON;

	if (limit) {
		state = [...productsJSON.slice(0, Number(limit))];
	}

	return NextResponse.json({ state });
}
