import { NextResponse } from 'next/server';
import productsJSON from '@/mock/items.json';

export async function GET(req: Request) {
	const { products } = productsJSON;
	const { searchParams } = new URL(req.url);
	const limit = searchParams.get('limit');
	let state = products;

	if (limit) {
		state = [...products.slice(0, Number(limit))];
	}

	return NextResponse.json([...state]);
}
