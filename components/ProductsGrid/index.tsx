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
	pagination?: boolean;
	keyPage: 'page' | 'pageFavorites';
}

export const ProductsGrid = ({
	items,
	children,
	fetching,
	error,
	page,
	pagination = false,
	keyPage,
}: ProductsGridProps) => {
	const { countPerPage, currentItems } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setCurrentItems({ items: new Array(...items), page }));
	}, [dispatch, items, page]);

	return (
		<WrapperComponent>
			<Loader loading={fetching} />
			{pagination ? <Pagination {...{ items, page, fetching, countPerPage }} keyChangePage={keyPage} /> : null}
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

			{!currentItems.length && !fetching && !error ? (
				<motion.div variants={containerVars} initial="hidden" animate="visible" exit="hidden">
					<LayerBlock mt="true">
						{keyPage === 'page' && `The search did't take a result`}
						{keyPage === 'pageFavorites' ? (
							<>
								{`Nothing was't add to favorites, go to`} <Link href="/products">Products</Link>
							</>
						) : null}
					</LayerBlock>
				</motion.div>
			) : null}
		</WrapperComponent>
	);
};

export default ProductsGrid;
