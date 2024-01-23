import { IProduct, productsUrl } from '@/services';

import { ContentProduct } from './content';

interface ProductPageProps {
	params: {
		id: string;
	};
}

export default async function ProductPage({ params }: ProductPageProps) {
	const res = await fetch(`${productsUrl}/${params.id}`);
	const serverProduct: IProduct = await res.json();

	return <ContentProduct {...{ serverProduct }} />;
}
