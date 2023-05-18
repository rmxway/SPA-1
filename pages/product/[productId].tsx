import { GetStaticPropsContext, NextPage } from 'next';
import { useEffect } from 'react';

import { Container, LayerBlock, RatingStars } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { generator } from '@/components/ProductsGrid/runOnce';
import { currency, IProduct, useAppSelector } from '@/services';
import { productsStore, wrapper } from '@/store';
import { Url } from '@/store/reducers/asyncGetAllProducts';
import { moveToCart } from '@/store/reducers/combineActions';

import { Image, Info, PriceBlock, Title, Wrapper, WrapperImage } from './styled';

interface ProductPageProps {
	element: IProduct | null;
	productId: number;
}

const ProductPage: NextPage<ProductPageProps> = ({ ...pageProps }) => {
	const { props } = wrapper.useWrappedStore(pageProps);
	const { productId, element } = props.pageProps;

	const { fetchedItems } = useAppSelector(productsStore);
	const current = fetchedItems.length === 0 ? element : fetchedItems.find((item) => item.id === productId);
	const img = String(current?.images?.length && current?.images[0]);

	useEffect(() => {
		generator.next();
	}, []);

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

export const getStaticProps = wrapper.getStaticProps(() => async ({ params }: GetStaticPropsContext) => {
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

	return {
		props,
	};
});

export { ProductPage };
export default ProductPage;
