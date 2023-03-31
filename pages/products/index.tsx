import { useEffect } from 'react';

import { Filter } from '@/components';
import { Container, LayerBlock } from '@/components/Layout';
import { useAppSelector } from '@/hooks';
import { productsStore, store } from '@/store';
import { asyncGetAllProducts } from '@/store/reducers/asyncGetAllProducts';

import { ProductsGrid } from './ProductsGrid';

function* runOnce() {
	yield store.dispatch(asyncGetAllProducts({ params: { limit: 100 } }));
}

const generator = runOnce();

const ProductsPage = () => {
	const { fetching, fetchedItems, error, page } = useAppSelector(productsStore);

	useEffect(() => {
		generator.next();
	}, []);

	return (
		<Container mt>
			<Filter />

			{error ? <LayerBlock>{error}</LayerBlock> : null}
			{fetchedItems ? (
				<ProductsGrid pagination items={fetchedItems} keyPage="page" {...{ fetching, error, page }} />
			) : null}
		</Container>
	);
};

export { ProductsPage };
export default ProductsPage;
