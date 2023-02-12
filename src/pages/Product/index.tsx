import { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { LayerBlock, RatingStars } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { useAppSelector } from '@/hooks';
import { fetchProducts } from '@/service/fetchProducts';
import { moveToCart } from '@/store/reducers/combineActions';

import { Image, Info, PriceBlock, Title, Wrapper } from './styled';

const ProductPage: FC = () => {
	const { productId } = useParams();
	const { items } = useAppSelector((store) => store.products);

	useEffect(() => {
		if (items.length === 0) fetchProducts(null, Number(productId));
	}, [productId, items]);

	const current = items.find((item) => item.id === Number(productId));
	const img = String(current?.images?.length && current?.images[0]);

	return current ? (
		<LayerBlock mt>
			<Wrapper>
				<Image src={img} alt={current?.title} />
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
						<span>{current.price} €</span>
						<ButtonUI primary onClick={() => moveToCart(current)} disabled={current.checked}>
							{current.checked ? 'Added' : 'Add to cart'}
						</ButtonUI>
					</PriceBlock>
				</Info>
			</Wrapper>
		</LayerBlock>
	) : (
		<>Not Found</>
	);
};

export { ProductPage };
export default ProductPage;
