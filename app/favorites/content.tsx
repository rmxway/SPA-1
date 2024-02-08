'use client';

import { useMemo, useState } from 'react';

import { Container } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { Button } from '@/components/ui/Button/styled';
import { IProduct, useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { removeAllFavorites } from '@/store/reducers/products';

export const ContentFavorites = () => {
	const { fetchedItems, page } = useAppSelector(productsStore);
	const [items, setItems] = useState<IProduct[]>([]);
	const dispatch = useAppDispatch();

	useMemo(() => {
		setItems(fetchedItems.filter((item) => item.favorite));
	}, [fetchedItems]);

	const handleRemoveAllFavorites = () => {
		dispatch(removeAllFavorites());
	};

	return (
		<Container $pt>
			{items.length > 0 && (
				<Button margins success onClick={handleRemoveAllFavorites}>
					Delete favorites
				</Button>
			)}
			<ProductsGrid {...{ items }} pagination keyPage="favorites" page={page} />
		</Container>
	);
};

export default ContentFavorites;
