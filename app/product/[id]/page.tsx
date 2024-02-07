import { IProduct } from '@/services';

import { ContentProduct } from './content';
import { getProduct } from './getProduct';

interface ProductPageProps {
	params: {
		id: string;
	};
}

export default async function ProductPage({ params }: ProductPageProps) {
	const serverProduct: IProduct = (await getProduct(params.id)) || { id: Number(params.id) };

	return <ContentProduct {...{ serverProduct }} />;
}
