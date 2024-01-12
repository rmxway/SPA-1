'use client';

import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { PropsWithChildren, useEffect } from 'react';

import { Pagination } from '@/components';
import { LayerBlock } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { Loader } from '@/components/ui';
import { IProduct, useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { setCurrentItems } from '@/store/reducers/products';

import { containerVars, FetchingBlock, Wrapper, WrapperComponent } from './styled';

interface ProductsGridProps extends PropsWithChildren {
	items: IProduct[];
	fetching: boolean;
	error: string;
	page: number;
	pagination: boolean;
	keyPage: 'page' | 'pageFavorites';
}

export function ProductsGrid({ items, children, fetching, error, page, pagination, keyPage }: ProductsGridProps) {
	const { countPerPage, currentItems } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setCurrentItems({ items: new Array(...items), page }));
	}, [items, page]);

	if (fetching)
		<WrapperComponent>
			<Loader loading={fetching} />
		</WrapperComponent>;

	return (
		<WrapperComponent>
			{pagination && !!currentItems.length && (
				<Pagination {...{ items, page, fetching, countPerPage }} keyChangePage={keyPage} />
			)}
			{!!currentItems.length && (
				<Wrapper>
					{children}
					<LayoutGroup>
						<FetchingBlock variants={containerVars} animate={fetching ? 'hidden' : 'visible'}>
							{!!currentItems.length &&
								!fetching &&
								!error &&
								currentItems.map((product) => (
									<ProductCard
										product={product}
										layout
										transition={{ duration: 0.5 }}
										variants={containerVars}
										initial="hidden"
										animate="visible"
										exit="hidden"
										key={product.id}
									/>
								))}
						</FetchingBlock>
					</LayoutGroup>
				</Wrapper>
			)}

			{!currentItems.length && !fetching && !error && (
				<motion.div variants={containerVars} initial="hidden" animate="visible" exit="hidden">
					<LayerBlock $mt>
						{keyPage === 'page' && `The search did't take a result`}
						{keyPage === 'pageFavorites' && (
							<>
								{`Nothing was't add to favorites, go to`} <Link href="/products">Products</Link>
							</>
						)}
					</LayerBlock>
				</motion.div>
			)}

			{pagination && !!currentItems.length && (
				<>
					<br />
					<Pagination {...{ items, page, fetching, countPerPage }} keyChangePage={keyPage} />
				</>
			)}
		</WrapperComponent>
	);
}

export default ProductsGrid;
