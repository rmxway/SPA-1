'use client';

import { useEffect } from 'react';

import { Container, LayerBlock } from '@/components/Layout';
import { ProductsGrid } from '@/components/ProductsGrid';
import { MainHeader } from '@/components/ui';
import { IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { placeProductsToRedux } from '@/store/reducers/runOnce';

type PropsProducts = {
	products: IProduct[];
};

export const ProductsContent = ({ products }: PropsProducts) => {
	const { fetchedItems, fetching, error, page } = useAppSelector(productsStore);

	useEffect(() => {
		placeProductsToRedux(products);
	}, [products]);

	return (
		<>
			<MainHeader>
				<Container>
					<h1>Products</h1>
				</Container>
			</MainHeader>
			<Container>
				{/* <Filter /> */}
				{error ? <LayerBlock>{error}</LayerBlock> : null}
				{fetching && <div>Data loading ...</div>}
				{!!fetchedItems.length && <ProductsGrid items={fetchedItems} pagination page={page} keyPage="page" />}
			</Container>
		</>
	);
};
