import { Metadata } from 'next';

import { productsUrl } from '@/services';

import { ContentProducts } from './content';

export const metadata: Metadata = {
	title: 'Products',
};

export default async function ProductsPage() {
	const getProducts = async () => {
		try {
			const res = await fetch(productsUrl, { cache: 'default' });
			if (res.ok) return res.json();
		} catch (error) {
			// eslint-disable-next-line no-console
			throw new Error((error as Error).message);
		}
		return [];
	};

	const data = await getProducts();

	return <ContentProducts products={data} />;
}
