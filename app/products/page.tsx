'use client';

import { useEffect } from 'react';

import { Filter } from '@/components';
import { Container, LayerBlock } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { generator } from '@/components/ProductsGrid/runOnce';
import { useAppSelector } from '@/services';
import { productsStore } from '@/store';

export default function ProductsPage() {
	const { fetching, fetchedItems, error, page } = useAppSelector(productsStore);

	useEffect(() => {
		if (fetchedItems.length === 0) generator.next();
	}, []);

	return (
		<Container $mt>
			<Filter />

			{error ? <LayerBlock>{error}</LayerBlock> : null}
			{fetchedItems ? (
				<ProductsGrid pagination items={fetchedItems} keyPage="page" {...{ fetching, error, page }} />
			) : null}
		</Container>
	);
}
