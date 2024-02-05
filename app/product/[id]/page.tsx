import { IProduct, productsUrl } from '@/services';

import { ContentProduct } from './content';

interface ProductPageProps {
	params: {
		id: string;
	};
}

export default async function ProductPage({ params }: ProductPageProps) {
	const getProduct = async () => {
		try {
			const res = await fetch(`${productsUrl}/${params.id}`);
			if (res.ok) return res.json();
		} catch (error) {
			// eslint-disable-next-line no-console
			throw new Error((error as Error).message);
		}
		return {};
	};

	const serverProduct: IProduct = (await getProduct()) || { id: Number(params.id) };

	return <ContentProduct {...{ serverProduct }} />;
}
