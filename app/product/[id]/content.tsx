'use client';

import 'swiper/css';
import 'swiper/css/pagination';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TextToggle } from '@/components';
import { Flexbox, Grid, LayerBlock, MobileWhiteBackground, RatingStars } from '@/components/Layout';
import { Button, Favorite, Sticker } from '@/components/ui';
import { Info, PriceBlock, SideBlock, Wrapper } from '@/modules/product/styled';
import { currency, IProduct, useAppDispatch, useAppSelector } from '@/services';
import { useGetProductQuery } from '@/store/api';
import { moveToCart } from '@/store/reducers/combineActions';
import { productMemoized } from '@/store/reducers/commonSelectors';
import { setTitle, toggleFavorite } from '@/store/reducers/products';
import { productsStore } from '@/store/types';

export const ContentProduct = () => {
	const { id } = useParams<{ id: string }>();
	const { fetchedItems, error } = useAppSelector(productsStore);
	useGetProductQuery(id, { skip: fetchedItems.length > 1 });
	const product: IProduct = productMemoized(useAppSelector(productsStore), id)!;

	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setTitle(product?.title || 'Error'));
		return () => {
			dispatch(setTitle(''));
		};
	}, [dispatch, product]);

	return (
		<MobileWhiteBackground>
			<Wrapper $pt>
				{error || ''}
				{product && (
					<>
						<Info>
							<LayerBlock>
								<Swiper
									pagination={{
										dynamicBullets: true,
										clickable: true,
									}}
									modules={[Pagination]}
									slidesPerView={1}
									spaceBetween={50}
								>
									{product.images?.map((image) => (
										<SwiperSlide key={image}>
											<Image src={image} width={500} height={500} alt={image} priority />
										</SwiperSlide>
									))}
								</Swiper>
								<RatingStars rating={Number(product.rating)} />
								<br />
								<span>
									{product.brand && (
										<Grid $gap={8} $direction="column">
											<h5>Brand:</h5>
											<p>{product.brand}</p>
										</Grid>
									)}
									{product.returnPolicy && (
										<Grid $gap={8} $direction="column">
											<h5>Return Policy:</h5>
											<p>{product.returnPolicy}</p>
										</Grid>
									)}

									<h5>Description:</h5>
									<TextToggle length={3}>
										<p>{product.description}</p>
										<p>
											Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
											consequuntur dolorem odio at sunt asperiores harum ducimus consequatur
											placeat, quidem illo facilis eveniet esse vel, totam mollitia ab accusantium
											culpa voluptatem, aperiam ipsa quibusdam! Accusamus dolorem vero aspernatur
											explicabo! Itaque quasi tempora aspernatur laborum pariatur. Quos,
											necessitatibus id! Atque aliquid eius dolores facere autem rem illum libero?
											Quasi, est, beatae quisquam deserunt molestias nam sequi modi sapiente quas
											officia aperiam numquam aut vero quia nisi rem, necessitatibus fugiat. Iure
											molestias perferendis ad, obcaecati veniam fuga molestiae? Rem amet ea
											asperiores eaque odio, quaerat architecto vero sint voluptatibus itaque
											voluptatum ab.
										</p>
									</TextToggle>
								</span>
							</LayerBlock>
						</Info>
						<SideBlock>
							<LayerBlock $fixedPadding>
								<PriceBlock>
									<Grid className="side-price" $direction="column">
										<span>
											{product.price} {currency}{' '}
											<Sticker $danger>
												-{Math.round(Number(product.discountPercentage))} %
											</Sticker>
										</span>
									</Grid>
									<Flexbox className="side-info">
										{product.stock && <Sticker $success>In Stock: {product.stock}</Sticker>}
										{product.tags && product.tags.map((tag) => <Sticker key={tag}>{tag}</Sticker>)}
									</Flexbox>
									<Grid $direction="column" $templateColumns="1fr 30px" $gap={5}>
										<Button
											$primary
											onClick={() => moveToCart(Number(product?.id))}
											disabled={product.checked}
											icon="cart"
										>
											{product.checked ? 'Added' : 'Add to cart'}
										</Button>
										<Favorite
											active={product.favorite}
											onActive={() => dispatch(toggleFavorite(Number(product.id)))}
										/>
									</Grid>
								</PriceBlock>
							</LayerBlock>
						</SideBlock>
					</>
				)}
			</Wrapper>
		</MobileWhiteBackground>
	);
};

export default ContentProduct;
