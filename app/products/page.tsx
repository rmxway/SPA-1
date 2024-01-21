import { productsUrl } from '@/services';

import { ProductsContent } from './content';

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

	return <ProductsContent products={data} />;
}
