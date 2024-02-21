'use client';

import 'swiper/css';

import Image from 'next/image';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { TextToggle } from '@/components';
import { Flexbox, LayerBlock, MobileWhiteBackground, RatingStars } from '@/components/Layout';
import { Button, Favorite } from '@/components/ui';
import { currency, IProduct, useAppDispatch } from '@/services';
import { moveToCart } from '@/store/reducers/combineActions';
import { setTitle, toggleFavorite } from '@/store/reducers/products';

import { Info, PriceBlock, SideBlock, Wrapper } from './styled';
import { useGetProduct } from './useGetProduct';

interface ProductPageProps {
	serverProduct: IProduct;
}

export function ContentProduct({ serverProduct }: ProductPageProps) {
	const { error, product } = useGetProduct(serverProduct);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setTitle(product.title || 'Error'));
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
								<Flexbox $nowrap $justify="space-between" $align="center">
									<RatingStars rating={Number(product.rating)} />
									<p>
										<strong>Category:</strong> {product.category}
									</p>
								</Flexbox>

								<br />
								<Swiper slidesPerView={1} spaceBetween={50}>
									{product.images?.map((image) => (
										<SwiperSlide key={image}>
											<Image src={image} width={500} height={500} alt={image} priority />
										</SwiperSlide>
									))}
								</Swiper>

								<span>
									<p>{product.description}</p>
									<h4>Description:</h4>
									<TextToggle length={3}>
										<p>
											AMOLED FHD+ punch-hole display with a high screen-to-body ratio provides a
											more exquisite, immersive experience. From dawn to dusk, OPPO F19’s
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
									<Flexbox $align="center" $justify="space-between">
										<span>
											{product.price} {currency}
										</span>
										<Favorite
											active={product.favorite}
											onActive={() => dispatch(toggleFavorite(Number(product.id)))}
										/>
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
