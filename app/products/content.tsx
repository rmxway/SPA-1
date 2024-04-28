'use client';

import { memo } from 'react';

import { Categories, Filter } from '@/components';
import { Container, LayerBlock } from '@/components/Layout';
import { ProductsGrid } from '@/modules/products';
import { useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { useGetProductsQuery } from '@/store/api';
import { productsSelectorMemoized } from '@/store/reducers/commonSelectors';

export const ContentProducts = memo(() => {
	const { fetchedItems, fetching, error } = productsSelectorMemoized(useAppSelector(productsStore));
	useGetProductsQuery(null, { skip: fetchedItems.length > 1 });

	return (
		<Container>
			<Filter isLoading={fetching} />
			<Categories isLoading={fetching} />
			{error ? <LayerBlock>{error}</LayerBlock> : null}
			<ProductsGrid items={fetchedItems} isLoading={fetching} pagination keyPage="products" />
		</Container>
	);
});

export default ContentProducts;
