'use client';

import { useEffect } from 'react';

import { Container, LayerBlock } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { placeProductsToRedux } from '@/store/reducers/runOnce';

type PropsProducts = {
	products: IProduct[];
};

export const ContentProducts = ({ products }: PropsProducts) => {
	const { fetchedItems, fetching, error, page } = useAppSelector(productsStore);

	useEffect(() => {
		placeProductsToRedux(products);
	}, [products]);

	return (
		<Container>
			{/* <Filter /> */}
			{error ? <LayerBlock>{error}</LayerBlock> : null}
			{fetching && <div>Data loading ...</div>}
			{!!fetchedItems.length && <ProductsGrid items={fetchedItems} pagination page={page} keyPage="page" />}
		</Container>
	);
};

export default ContentProducts;
