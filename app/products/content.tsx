'use client';

import { Filter } from '@/components';
import { Container, LayerBlock } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { useGetProductsQuery } from '@/store/api';

export const ContentProducts = () => {
	const { fetchedItems, fetching, error } = useAppSelector(productsStore);
	useGetProductsQuery(null, { skip: fetchedItems.length > 1 });

	return (
		<Container>
			<Filter />
			{error ? <LayerBlock>{error}</LayerBlock> : null}
			<ProductsGrid items={fetchedItems} isLoading={fetching} pagination keyPage="products" />
		</Container>
	);
};

export default ContentProducts;
