'use client';

import { useEffect } from 'react';

import { Filter } from '@/components';
import { Container, LayerBlock } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { placeProductsToRedux } from '@/store/reducers/runOnce';

type PropsProducts = {
	products: IProduct[];
};

export const ContentProducts = ({ products }: PropsProducts) => {
	const { fetchedItems, reservedItems, fetching, error } = useAppSelector(productsStore);

	useEffect(() => {
		placeProductsToRedux(products);
	}, [products]);

	return (
		<Container>
			<Filter />
			{error ? <LayerBlock>{error}</LayerBlock> : null}
			{fetching && <div>Data loading ...</div>}
			{!!reservedItems.length && <ProductsGrid items={fetchedItems} pagination keyPage="products" />}
		</Container>
	);
};

export default ContentProducts;
