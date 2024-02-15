'use client';

import { useState } from 'react';

import { Container } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { ButtonUI, LinkIcon, Modal } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { favoritesItemsMemoized, removeAllFavorites } from '@/store/reducers/products';

export const ContentFavorites = () => {
	const [modalShow, setModalShow] = useState(false);
	const items = favoritesItemsMemoized(useAppSelector(productsStore));
	const dispatch = useAppDispatch();

	const handleRemoveAllFavorites = () => {
		dispatch(removeAllFavorites());
		setModalShow(false);
	};

	return (
		<Container $pt>
			{items.length > 0 && (
				<LinkIcon icon="trash" initial onClick={() => setModalShow(true)} style={{ top: '-15px' }}>
					Delete favorites
				</LinkIcon>
			)}
			<Modal open={modalShow} onClose={() => setModalShow(false)} title="Delete favorites">
				<div>Sure you want to delete all favorites ?</div>
				<br />
				<ButtonUI danger onClick={handleRemoveAllFavorites}>
					Delete
				</ButtonUI>
			</Modal>
			<ProductsGrid {...{ items }} pagination keyPage="favorites" />
		</Container>
	);
};

export default ContentFavorites;
