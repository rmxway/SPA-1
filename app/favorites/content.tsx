'use client';

import { useMemo, useState } from 'react';

import { Container } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store';

export const ContentFavorites = () => {
	const { fetchedItems } = useAppSelector(productsStore);
	const [items, setItems] = useState<IProduct[]>([]);

	useMemo(() => {
		setItems(fetchedItems.filter((item) => item.favorite));
	}, [fetchedItems]);

	return (
		<Container>
			<ProductsGrid {...{ items }} pagination keyPage="pageFavorites" page={1} />
		</Container>
	);
};

export default ContentFavorites;
