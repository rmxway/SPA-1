'use client';

import { useEffect, useState } from 'react';

import { Container } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import MainHeader from '@/components/ui/MainHeader';

export default function FavoritesPage() {
	const { error, fetching, fetchedItems, pageFavorites } = useAppSelector(productsStore);
	const [items, setItems] = useState<IProduct[]>([]);

	useEffect(() => {
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
				<ProductsGrid pagination keyPage="pageFavorites" page={pageFavorites} {...{ items, fetching, error }} />
			</Container>
		</>
	);
}
