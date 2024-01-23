'use client';

import { Container, LayerBlock, RatingStars } from '@/components/Layout';
import { WrapperImages } from '@/components/ProductCard/WrapperImage';
import { ButtonUI, Loader } from '@/components/ui';
import { currency, IProduct } from '@/services';
import { moveToCart } from '@/store/reducers/combineActions';

import { Info, PriceBlock, Title, Wrapper } from './styled';
import { useGetProduct } from './useGetProduct';

interface ProductPageProps {
	serverProduct: IProduct;
}

export function ContentProduct({ serverProduct }: ProductPageProps) {
	const { error, fetching, product } = useGetProduct(serverProduct);

	return (
		<Container>
			<LayerBlock $mt>
				<Loader loading={fetching} />
				{error || ''}
				{product && (
					<Wrapper>
						<WrapperImages product={product} size={1000} />
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

export default ContentProduct;
