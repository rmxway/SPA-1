import { NextPage } from 'next';

import { Container, LayerBlock, RatingStars } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { currency } from '@/constants';
import { useAppSelector } from '@/hooks';
import { DataFetch } from '@/interfaces';
import { productsStore } from '@/store';
import { fetchLink } from '@/store/reducers/asyncGetAllProducts';
import { moveToCart } from '@/store/reducers/combineActions';

import { Image, Info, PriceBlock, Title, Wrapper, WrapperImage } from './styled';

interface ProductPageProps {
	productId: string;
}

const ProductPage: NextPage<ProductPageProps> = ({ productId }) => {
	const { fetchedItems } = useAppSelector(productsStore);

	const current = fetchedItems.find((item) => item.id === Number(productId)); // productId
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
};

export async function getStaticPaths() {
	const res = await fetch(fetchLink);
	const items: DataFetch = await res.json();

	const paths = items.products.map((item) => ({
		params: { productId: String(item.id) },
	}));

	return {
		paths,
		fallback: false,
	};
}

type Params = { params: { productId: string } };

export async function getStaticProps({ params }: Params) {
	return {
		props: {
			productId: String(params.productId),
		},
	};
}

export { ProductPage };
export default ProductPage;
