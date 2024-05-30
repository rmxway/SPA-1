'use client';

import 'react-loading-skeleton/dist/skeleton.css';

import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { memo, useCallback, useEffect } from 'react';

import { Pagination } from '@/components';
import { LayerBlock } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { SkeletonCard } from '@/components/ProductCard/SkeletonCard';
import { IProduct, TypePages, useAppDispatch, useAppSelector } from '@/services';
import { currentItemsMemoized } from '@/store/reducers/commonSelectors';
import { changePage, changeTypePage } from '@/store/reducers/products';
import { productsStore } from '@/store/types';

import { containerVars, FetchingBlock, WrapperComponent } from './styled';

interface ProductsGridProps {
	items: IProduct[];
	isLoading?: boolean;
	pagination?: boolean;
	keyPage: TypePages;
}

export const ProductsGrid = memo(({ items, isLoading = false, pagination, keyPage }: ProductsGridProps) => {
	const { reservedItems, error, page, countPerPage } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();
	const currentItems = currentItemsMemoized(useAppSelector(productsStore), items);
	const skeletonArr = useCallback(
		() => new Array<number>(countPerPage).fill(NaN).map(() => Math.random() * countPerPage),
		[countPerPage],
	);

	useEffect(() => {
		dispatch(changeTypePage(keyPage));
	}, [keyPage, dispatch]);

	return (
		<WrapperComponent>
			<LayoutGroup>
				<FetchingBlock variants={containerVars} animate="visible" initial="hidden">
					{isLoading && skeletonArr().map((item) => <SkeletonCard key={item} />)}
					{!isLoading &&
						!!currentItems.length &&
						!error &&
						currentItems.map((product, idx) => (
							<ProductCard
								product={product}
								layout
								transition={{ duration: 0.3, delay: idx * 0.04 }}
								variants={containerVars}
								initial="hidden"
								animate="visible"
								exit="hidden"
								key={product.id}
							/>
						))}
				</FetchingBlock>
			</LayoutGroup>

			{pagination && <Pagination {...{ changePage, items, isLoading, countPerPage, page }} />}

			{!currentItems.length && (
				<motion.div variants={containerVars} initial="hidden" animate="visible" exit="hidden">
					<LayerBlock $fixedPadding>
						{reservedItems.length !== 0 && keyPage === 'products' && `The search did't take a result`}
						{reservedItems.length === 0 &&
							keyPage === 'products' &&
							`Elements not found. Please contact with the website administrator.`}
						{keyPage === 'favorites' && (
							<>
								{`Nothing was't add to favorites, go to`} <Link href="/products">Products</Link>
							</>
						)}
					</LayerBlock>
				</motion.div>
			)}
		</WrapperComponent>
	);
});

export default ProductsGrid;
