'use client';

import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { ReactNode, useEffect } from 'react';

import { Pagination } from '@/components';
import { LayerBlock } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { IProduct, useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { currentItemsMemoized } from '@/store/reducers/commonSelectors';
import { changePage, changeTypePage, TypePages } from '@/store/reducers/products';

import { containerVars, FetchingBlock, WrapperComponent } from './styled';

interface ProductsGridProps {
	items: IProduct[];
	pagination?: boolean;
	keyPage: TypePages;
	children?: ReactNode;
}

export const ProductsGrid = ({ children, items, pagination, keyPage }: ProductsGridProps) => {
	const { error, page, countPerPage } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();
	const currentItems = currentItemsMemoized(useAppSelector(productsStore), items);

	useEffect(() => {
		dispatch(changeTypePage(keyPage));
	}, [keyPage, dispatch]);

	return (
		<WrapperComponent>
			{pagination && currentItems.length !== 0 && <Pagination {...{ changePage, items, countPerPage, page }} />}
			{!!currentItems.length && (
				<>
					{children}
					<LayoutGroup>
						<FetchingBlock variants={containerVars} animate="visible" initial="hidden">
							{!!currentItems.length &&
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
				</>
			)}

			{items.length > 0 ||
				(currentItems.length === 0 && (
					<motion.div variants={containerVars} initial="hidden" animate="visible" exit="hidden">
						<LayerBlock $fixedPadding>
							{keyPage === 'products' && `The search did't take a result`}
							{keyPage === 'favorites' && (
								<>
									{`Nothing was't add to favorites, go to`} <Link href="/products">Products</Link>
								</>
							)}
						</LayerBlock>
					</motion.div>
				))}
		</WrapperComponent>
	);
};

export default ProductsGrid;
