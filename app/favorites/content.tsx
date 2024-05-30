'use client';

import { useState } from 'react';

import { Container } from '@/components/Layout';
import { Button, LinkIcon, Modal } from '@/components/ui';
import { ProductsGrid } from '@/modules/products';
import { useAppDispatch, useAppSelector } from '@/services';
import { favoritesItemsMemoized } from '@/store/reducers/commonSelectors';
import { removeAllFavorites } from '@/store/reducers/products';
import { productsStore } from '@/store/types';

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
				<LinkIcon icon="trash" onClick={() => setModalShow(true)} style={{ top: '-30px' }}>
					Delete favorites
				</LinkIcon>
			)}
			<Modal open={modalShow} onClose={() => setModalShow(false)} title="Delete favorites">
				<div>Sure you want to delete all favorites ?</div>
				<br />
				<Button $danger onClick={handleRemoveAllFavorites}>
					Delete
				</Button>
			</Modal>

			<ProductsGrid {...{ items }} pagination keyPage="favorites" />
		</Container>
	);
};

export default ContentFavorites;
