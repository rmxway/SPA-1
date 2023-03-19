import { LayoutGroup, motion } from 'framer-motion';
import { PropsWithChildren, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';

import { ProductCard } from '@/components/ProductCard';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { IProduct } from '@/interfaces';
import { productsStore } from '@/store';
import { setCurrentItems } from '@/store/reducers/products';

import { LayerBlock } from './Layout';
import { Pagination } from './Pagination';
import { Loader } from './ui';

const WrapperComponent = styled.div`
	min-height: 600px;
`;

const Wrapper = styled.div`
	position: relative;
	margin: -10px;
`;

const FetchingBlock = styled(motion.div)`
	position: relative;
	display: flex;
	flex-wrap: wrap;
`;

const containerVars = {
	hidden: { opacity: 0.2 },
	visible: { opacity: 1 },
};

interface ProductsGridProps extends PropsWithChildren {
	items: IProduct[];
	fetching: boolean;
	error: string;
	page: number;
	pagination?: boolean;
	keyPage: 'page' | 'pageFavorites';
}

const ProductsGrid = ({ items, children, fetching, error, page, pagination = false, keyPage }: ProductsGridProps) => {
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
								{`Nothing was't add to favorites, go to`} <Link to="/products">Products</Link>
							</>
						) : null}
					</LayerBlock>
				</motion.div>
			) : null}
		</WrapperComponent>
	);
};

ProductsGrid.displayName = 'ProductGrid';

export { ProductsGrid };
export default ProductsGrid;
