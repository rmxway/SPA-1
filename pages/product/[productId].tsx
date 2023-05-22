import { GetStaticPropsContext, NextPage } from 'next';

import { Container, LayerBlock, RatingStars } from '@/components/Layout';
import { WrapperImage } from '@/components/ProductCard/WrapperImage';
import { ButtonUI } from '@/components/ui';
import { currency, IProduct, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { Url } from '@/store/reducers/asyncGetAllProducts';
import { moveToCart } from '@/store/reducers/combineActions';

import { Info, PriceBlock, Title, Wrapper } from './styled';

interface ProductPageProps {
	err: undefined | string;
	pageProps: {
		element: IProduct | null;
		productId: number;
	};
}

const ProductPage: NextPage<ProductPageProps> = (props) => {
	const { pageProps } = props;
	const { element, productId } = pageProps;
	const { fetchedItems } = useAppSelector(productsStore);

	const current = fetchedItems.length === 0 ? element : fetchedItems.find((item) => item.id === Number(productId));

	return current ? (
		<Container>
			<LayerBlock mt="true">
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
};

export async function getStaticPaths() {
	const url: Url = 'http://localhost:3000/api/products';

	const res = await fetch(url);
	const data: IProduct[] = await res.json();

	const paths = data.map((item) => ({
		params: { productId: String(item.id) },
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
	const url: Url = 'http://localhost:3000/api/products';

	let element: IProduct | null = null;

	const res = await fetch(`${url}/${params?.productId}`);
	const data = await res.json();

	element = data;

	if (!element?.id) {
		return {
			notFound: true,
		};
	}

	const props = {
		element,
		productId: Number(params?.productId),
	};

	return { props };
}

export { ProductPage };
export default ProductPage;
