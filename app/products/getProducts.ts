import { headers } from 'next/headers';

import { productsUrl } from '@/services';

export const getProducts = async () => {
	const referer = headers().get('referer');

	try {
		const res = await fetch(`${referer}${productsUrl}`);
		if (res.ok) return res.json();
	} catch (error) {
		// eslint-disable-next-line no-console
		throw new Error((error as Error).message);
	}
	return [];
};
