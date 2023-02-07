import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LayerBlock, LazyImage } from '@/components/Layout';
import { useAppSelector } from '@/hooks';
import { fetchProducts } from '@/service/fetchProducts';

const Product: FC = () => {
	const { productId } = useParams();
	const { items } = useAppSelector((store) => store.products);

	useEffect(() => {
		if (items.length === 0) fetchProducts(null, Number(productId));
	}, [productId, items]);

	const current = items.find((item) => item.id === Number(productId));

	return current ? (
		<>
			<h1>{current?.title}</h1>
			<LayerBlock>
				<LazyImage src={current?.image} height="200" alt={current?.title} />
			</LayerBlock>
		</>
	) : (
		<>Not Found</>
	);
};

export { Product };
export default Product;
