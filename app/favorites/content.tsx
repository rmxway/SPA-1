'use client';

import { Container } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { LinkIcon } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { favoritesItemsMemoized, removeAllFavorites } from '@/store/reducers/products';

export const ContentFavorites = () => {
	const items = favoritesItemsMemoized(useAppSelector(productsStore));
	const dispatch = useAppDispatch();

	const handleRemoveAllFavorites = () => {
		dispatch(removeAllFavorites());
	};

	return (
		<Container $pt>
			{items.length > 0 && (
				<LinkIcon icon="trash" onClick={handleRemoveAllFavorites}>
					Delete favorites
				</LinkIcon>
			)}
			<ProductsGrid {...{ items }} pagination keyPage="favorites" />
		</Container>
	);
};

export default ContentFavorites;
