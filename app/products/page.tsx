'use client';

import { Filter } from '@/components';
import { Container, LayerBlock } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { useGetProductsQuery } from '@/store/api';

export default function ProductsPage() {
	useGetProductsQuery();
	const { fetchedItems, fetching, error, page } = useAppSelector(productsStore);

	return (
		<Container>
			<h1>Products</h1>
			<Filter />

			{error ? <LayerBlock>{error}</LayerBlock> : null}
			{fetching && <div>Data loading ...</div>}
			{fetchedItems ? (
				<ProductsGrid pagination items={fetchedItems} keyPage="page" {...{ fetching, error, page }} />
			) : null}
		</Container>
	);
}
