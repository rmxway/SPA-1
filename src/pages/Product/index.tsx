import { FC } from 'react';
import { useParams } from 'react-router-dom';

import { Container, LayerBlock, RatingStars } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { currency } from '@/constants';
import { useAppSelector } from '@/hooks';
import { productsStore } from '@/store';
import { moveToCart } from '@/store/reducers/combineActions';

import { Image, Info, PriceBlock, Title, Wrapper, WrapperImage } from './styled';

const ProductPage: FC = () => {
	const { productId } = useParams();
	const { fetchedItems } = useAppSelector(productsStore);

	const current = fetchedItems.find((item) => item.id === Number(productId));
	const img = String(current?.images?.length && current?.images[0]);

	return current ? (
		<Container>
			<LayerBlock mt="true">
				<Wrapper>
					<WrapperImage>
						<Image src={img} alt={current?.title} />
					</WrapperImage>

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
							<ButtonUI primary onClick={() => moveToCart(Number(current.id))} disabled={current.checked}>
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
};

export { ProductPage };
export default ProductPage;
