import { FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components/macro';

import { ProductCard } from '@/components/ProductCard';
import { useAppSelector } from '@/hooks';
import { productsStore } from '@/store';

import { LayerBlock } from './Layout';

const WrapperComponent = styled.div`
	min-height: 600px;
`;

const Wrapper = styled.div`
	position: relative;
	margin: -10px;
`;

const FetchingBlock = styled.div<{ fetch: boolean }>`
	position: relative;
	display: flex;
	flex-wrap: wrap;
	transition: 0.8s opacity;

	${(props) =>
		props.fetch &&
		css`
			opacity: 0.2;
			transition-duration: 0.2s;
		`}
`;

const ProductsGrid: FC<PropsWithChildren> = ({ children }) => {
	const { items, error, fetching } = useAppSelector(productsStore);

	return (
		<WrapperComponent>
			<Wrapper>
				{children}

				<FetchingBlock fetch={fetching}>
					{!!items.length &&
						!error &&
						items.map((product, index) => <ProductCard product={product} key={product.id} index={index} />)}
				</FetchingBlock>
			</Wrapper>

			{!items.length && !fetching ? <LayerBlock mt>{`The search did't take a result`}</LayerBlock> : null}
		</WrapperComponent>
	);
};

export { ProductsGrid };
export default ProductsGrid;
