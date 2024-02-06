import { Metadata } from 'next';

import { IProduct } from '@/services';

import { ContentProducts } from './content';
import { getProducts } from './getProducts';

export const metadata: Metadata = {
	title: 'Products',
};

export default async function ProductsPage() {
	const data: IProduct[] = await getProducts();

	return <ContentProducts products={data} />;
}
