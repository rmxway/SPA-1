'use client';

import { Container, LayerBlock, RatingStars } from '@/components/Layout';
import { ButtonUI, Loader } from '@/components/ui';

import { moveToCart } from '@/store/reducers/combineActions';

import { Info, PriceBlock, Title, Wrapper } from './styled';
import WrapperImage from '@/components/ProductCard/WrapperImage';
import { currency } from '@/services';
import { useGetProduct } from './useGetProduct';

interface ProductPageProps {
	params: {
		id: string;
	};
}

export default function Product({ params }: ProductPageProps) {
	const { error, fetching, product } = useGetProduct(params.id);

	return (
		<Container>
			<LayerBlock $mt>
				<Loader loading={fetching} />
				{error ? error : ''}
				{product && (
					<Wrapper>
						<WrapperImage product={product} size={1000} />
						<Info>
							<Title>{product?.title}</Title>
							<span>
								<p>
									<strong>Category:</strong> {product.category}
								</p>
								<br />
								<p>{product.description}</p>
							</span>

							<PriceBlock>
								<RatingStars rating={Number(product.rating)} />
								<br />
								<span>
									{product.price} {currency}
								</span>
								<ButtonUI
									primary
									animate
									onClick={() => moveToCart(Number(product?.id))}
									disabled={product.checked}
								>
									{product.checked ? 'Added' : 'Add to cart'}
								</ButtonUI>
							</PriceBlock>
						</Info>
					</Wrapper>
				)}
			</LayerBlock>
		</Container>
	);
}
