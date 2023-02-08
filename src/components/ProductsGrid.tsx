import { FC } from 'react';
import styled from 'styled-components/macro';

import { useAppSelector } from '@/hooks';
import { IProduct } from '@/interfaces';
import { productsStore } from '@/store';

import { ProductCard } from './ProductCard';

const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	margin: -10px;
`;

const ProductsGrid: FC = () => {
	const { items } = useAppSelector(productsStore);

	return (
		<Wrapper>
			{items &&
				items.map((product: IProduct, index) => <ProductCard product={product} key={product.id} index={index} />)}
		</Wrapper>
	);
};

export { ProductsGrid };
export default ProductsGrid;
