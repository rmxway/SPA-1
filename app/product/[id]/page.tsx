'use client';

import { Container, LayerBlock, RatingStars } from '@/components/Layout';
import { WrapperImage } from '@/components/ProductCard/WrapperImage';
import { ButtonUI } from '@/components/ui';
import { currency, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { moveToCart } from '@/store/reducers/combineActions';

import { Info, PriceBlock, Title, Wrapper } from './styled';
import { useEffect } from 'react';
import { generator } from '@/components/ProductsGrid/runOnce';

interface ProductPageProps {
	params: {
		id: string;
	};
}

export default function Product(props: ProductPageProps) {
	const { params } = props;
	const { fetchedItems } = useAppSelector(productsStore);

	useEffect(() => {
		if (fetchedItems.length === 0) generator.next();
	}, []);

	const current = fetchedItems.find((item) => item.id === Number(params.id));

	return current ? (
		<Container>
			<LayerBlock $mt>
				<Wrapper>
					<WrapperImage product={current} size={1000} />
					<Info>
						<Title>{current?.title}</Title>
						<span>
							<p>
								<strong>Category:</strong> {current.category}
							</p>
							<br />
							<p>{current.description}</p>
						</span>

						<PriceBlock>
							<RatingStars rating={Number(current.rating)} />
							<br />
							<span>
								{current.price} {currency}
							</span>
							<ButtonUI
								primary
								animate
								onClick={() => moveToCart(Number(current.id))}
								disabled={current.checked}
							>
								{current.checked ? 'Added' : 'Add to cart'}
							</ButtonUI>
						</PriceBlock>
					</Info>
				</Wrapper>
			</LayerBlock>
		</Container>
	) : (
		<>Not Found</>
	);
}
