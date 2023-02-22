import { AnimatePresence, motion } from 'framer-motion';
import { FC, PropsWithChildren } from 'react';
import styled from 'styled-components/macro';

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

const FetchingBlock = styled(motion.div)`
	position: relative;
	display: flex;
	flex-wrap: wrap;
`;

const containerVars = {
	hidden: { opacity: 0.2 },
	visible: { opacity: 1 },
};

const ProductsGrid: FC<PropsWithChildren> = ({ children }) => {
	const { items, error, fetching } = useAppSelector(productsStore);

	return (
		<WrapperComponent>
			<Wrapper>
				{children}
				<AnimatePresence>
					<FetchingBlock variants={containerVars} animate={fetching ? 'hidden' : 'visible'}>
						{!!items.length &&
							!error &&
							items.map((product, index) => (
								<ProductCard product={product} key={product.id} index={index} />
							))}
					</FetchingBlock>
				</AnimatePresence>
			</Wrapper>

			{!items.length && !fetching && !error ? (
				<LayerBlock mt>{`The search did't take a result`}</LayerBlock>
			) : null}
		</WrapperComponent>
	);
};

export { ProductsGrid };
export default ProductsGrid;
