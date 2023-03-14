import { LayoutGroup, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';
import styled from 'styled-components/macro';

import { ProductCard } from '@/components/ProductCard';
import { IProduct } from '@/interfaces';

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

interface ProductsGridProps extends PropsWithChildren {
	items: IProduct[];
	fetching: boolean;
	error: string;
}

const ProductsGrid = ({ children, items, fetching, error }: ProductsGridProps) => (
	<WrapperComponent>
		<Wrapper>
			{children}
			<LayoutGroup>
				<FetchingBlock variants={containerVars} animate={fetching ? 'hidden' : 'visible'}>
					{!!items.length &&
						!error &&
						items.map((product) => (
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

		{!items.length && !fetching && !error ? (
			<motion.div variants={containerVars} initial="hidden" animate="visible" exit="hidden">
				<LayerBlock mt="true">{`The search did't take a result`}</LayerBlock>
			</motion.div>
		) : null}
	</WrapperComponent>
);

ProductsGrid.displayName = 'ProductGrid';

export { ProductsGrid };
export default ProductsGrid;
