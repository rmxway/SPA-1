import { NextResponse } from 'next/server';

import productsJSON from '@/mock/items.json';

export function GET(req: Request) {
	const { products } = productsJSON;
	const { pathname } = new URL(req.url);
	const el = pathname.split('/');
	const id = Number(el[el.length - 1]);
	const state = products.find((item) => item.id === id);

	return NextResponse.json(state);
}
