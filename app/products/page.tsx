'use client';

import { Filter } from '@/components';
import { Container, LayerBlock } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { useGetProductsQuery } from '@/store/api';

export default function ProductsPage() {
	const { fetchedItems, fetching, error, page } = useAppSelector(productsStore);
	const { isLoading } = useGetProductsQuery();

	return (
		<Container $mt>
			<Filter />

			{error ? <LayerBlock>{error}</LayerBlock> : null}
			{isLoading && <div>Data loading ...</div>}
			{fetchedItems ? (
				<ProductsGrid pagination items={fetchedItems} keyPage="page" {...{ fetching, error, page }} />
			) : null}
		</Container>
	);
}
