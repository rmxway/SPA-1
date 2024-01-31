'use client';

import { LayoutGroup, motion } from 'framer-motion';
import Link from 'next/link';
import { PropsWithChildren, useEffect, useState } from 'react';

import { Pagination } from '@/components';
import { LayerBlock } from '@/components/Layout';
import { ProductCard } from '@/components/ProductCard';
import { IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { TypePages } from '@/store/reducers/products';

import { containerVars, FetchingBlock, Wrapper, WrapperComponent } from './styled';

interface ProductsGridProps extends PropsWithChildren {
	items: IProduct[];
	pagination?: boolean;
	page: number;
	keyPage: TypePages;
}

export const ProductsGrid = ({ children, items, pagination, page, keyPage }: ProductsGridProps) => {
	const { error, countPerPage } = useAppSelector(productsStore);
	const [currentItems, setCurrentItems] = useState<IProduct[]>([]);

	useEffect(() => {
		if (Array.isArray(items) && items.length > 0) {
			const array = [...items];
			const filteredItems = [...array.splice((page - 1) * countPerPage, countPerPage)];
			setCurrentItems(filteredItems);
		} else {
			setCurrentItems([]);
		}
	}, [page, items, countPerPage]);

	return (
		<WrapperComponent>
			{pagination && currentItems.length !== 0 && <Pagination items={items} page={page} />}
			{!!currentItems.length && (
				<Wrapper>
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
				</Wrapper>
			)}

			{items.length > 0 ||
				(currentItems.length === 0 && (
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
				))}
		</WrapperComponent>
	);
};

export default ProductsGrid;
