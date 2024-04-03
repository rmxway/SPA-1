'use client';

import 'swiper/css';

import Image from 'next/image';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TextToggle } from '@/components';
import { Flexbox, LayerBlock, MobileWhiteBackground, RatingStars } from '@/components/Layout';
import { Button, Favorite, Sticker } from '@/components/ui';
import { currency, IProduct, useAppDispatch, useAppSelector } from '@/services';
import { productsStore } from '@/store';
import { useGetProductQuery } from '@/store/api';
import { moveToCart } from '@/store/reducers/combineActions';
import { productMemoized } from '@/store/reducers/commonSelectors';
import { setTitle, toggleFavorite } from '@/store/reducers/products';

import { Info, PriceBlock, SideBlock, Wrapper } from './styled';

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
								<Swiper slidesPerView={1} spaceBetween={50}>
									{product.images?.map((image) => (
										<SwiperSlide key={image}>
											<Image src={image} width={500} height={500} alt={image} priority />
										</SwiperSlide>
									))}
								</Swiper>
								<RatingStars rating={Number(product.rating)} />
								<span>
									<p>{product.description}</p>
									<h4>Description:</h4>
									<TextToggle length={3}>
										<p>
											AMOLED FHD+ punch-hole display with a high screen-to-body ratio provides a
											more exquisite, immersive experience. From dawn to dusk, OPP F19’s
											eye-caring screen continuously adapts to the level that’s gentle for your
											eyes.
										</p>
										<p>
											Amazing Performance at the Tip of Your Finger. Our advanced In-Display
											Fingerprint Unlock rapidly and accurately scans your finger to instantly
											unlock at the drop of a fingertip.
										</p>
										<p>
											You deserve a phone that acts fast and never acts up. Our self-developed RAM
											Expansion converts available ROM to RAM to support highly demanding apps and
											reduce lags whenever necessary. To top it off, enjoy abundant memory and
											smooth performance with 6GB of RAM and 128GB of ROM.
										</p>
									</TextToggle>
								</span>
							</LayerBlock>
						</Info>
						<SideBlock>
							<LayerBlock>
								<PriceBlock>
									<Flexbox className="side-price">
										<span>
											{product.price} {currency}{' '}
											<Sticker $danger>
												-{Math.round(Number(product.discountPercentage))} %
											</Sticker>
										</span>
										<Favorite
											active={product.favorite}
											onActive={() => dispatch(toggleFavorite(Number(product.id)))}
										/>
									</Flexbox>
									<Flexbox className="side-info">
										<Sticker>{product.category}</Sticker>
										{product.stock && <Sticker $success>In Stock: {product.stock}</Sticker>}
									</Flexbox>
									<Button
										$primary
										onClick={() => moveToCart(Number(product?.id))}
										disabled={product.checked}
									>
										{product.checked ? 'Added' : 'Add to cart'}
									</Button>
								</PriceBlock>
							</LayerBlock>
						</SideBlock>
					</>
				)}
			</Wrapper>
		</MobileWhiteBackground>
	);
}

export default ContentProduct;
