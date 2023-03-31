import { GetStaticPropsContext, NextPage } from 'next';

import { Container, LayerBlock, RatingStars } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { currency } from '@/constants';
import { useAppSelector } from '@/hooks';
import { IProduct } from '@/interfaces';
import { productsStore, store, wrapper } from '@/store';
import { Url } from '@/store/reducers/asyncGetAllProducts';
import { moveToCart } from '@/store/reducers/combineActions';

import { Image, Info, PriceBlock, Title, Wrapper, WrapperImage } from './styled';

interface ProductPageProps {
	element: IProduct | null;
	productId: number;
}

const ProductPage: NextPage<ProductPageProps> = ({ element, productId }) => {
	const { fetchedItems } = useAppSelector(productsStore);
	const current = !fetchedItems.length ? element : fetchedItems.find((item) => item.id === productId);
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
	const { fetchedItems } = store.getState().products;
	let element: IProduct | null = null;

	if (params) {
		if (!fetchedItems.length) {
			const res = await fetch(`${url}/${params.productId}`);
			const data = await res.json();

			element = data;

			if (!element) {
				return {
					notFound: true,
				};
			}
		}

		return {
			props: {
				element,
				productId: Number(params.productId),
			},
		};
	}

	return {
		props: {},
	};
});

export { ProductPage };
export default ProductPage;
