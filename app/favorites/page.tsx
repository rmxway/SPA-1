'use client';

import { useMemo, useState } from 'react';

import { Container } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { MainHeader } from '@/components/ui/MainHeader';
import { IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store';

export default function FavoritesPage() {
	const { fetchedItems } = useAppSelector(productsStore);
	const [items, setItems] = useState<IProduct[]>([]);

	useMemo(() => {
		setItems(fetchedItems.filter((item) => item.favorite));
	}, [fetchedItems]);

	return (
		<>
			<MainHeader>
				<Container>
					<h1>Your favorites</h1>
				</Container>
			</MainHeader>
			<Container>
				<ProductsGrid {...{ items }} pagination keyPage="pageFavorites" page={1} />
			</Container>
		</>
	);
}
