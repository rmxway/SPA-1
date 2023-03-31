import { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { Container } from '@/components/Layout';
import { useAppSelector } from '@/hooks';
import { IProduct } from '@/interfaces';
import { productsStore } from '@/store';

import { ProductsGrid } from './products/ProductsGrid';

const FavoritesPage: NextPage = () => {
	const { error, fetching, fetchedItems, pageFavorites } = useAppSelector(productsStore);
	const [items, setItems] = useState<IProduct[]>([]);

	useEffect(() => {
		setItems(fetchedItems.filter((item) => item.favorite));
	}, [fetchedItems]);

	return (
		<Container>
			<h1>Your favorites</h1>
			<ProductsGrid pagination keyPage="pageFavorites" page={pageFavorites} {...{ items, fetching, error }} />
		</Container>
	);
};

export { FavoritesPage };
export default FavoritesPage;
