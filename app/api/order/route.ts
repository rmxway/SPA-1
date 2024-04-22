import { NextResponse } from 'next/server';

import { OrderFields } from '@/modules/cart/services/schemaOrder';

export async function POST(req: Request) {
	const data = (await req.json()) as OrderFields;
	return NextResponse.json(data);
}
