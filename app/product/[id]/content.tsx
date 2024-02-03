'use client';

import 'swiper/css';

import Image from 'next/image';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Container, Flexbox, LayerBlock, RatingStars } from '@/components/Layout';
import { ButtonUI, Loader } from '@/components/ui';
import { currency, IProduct, useAppDispatch } from '@/services';
import { moveToCart } from '@/store/reducers/combineActions';
import { setTitle } from '@/store/reducers/products';

import { Info, PriceBlock, SideBlock, Wrapper } from './styled';
import { useGetProduct } from './useGetProduct';

interface ProductPageProps {
	serverProduct: IProduct;
}

export function ContentProduct({ serverProduct }: ProductPageProps) {
	const { error, fetching, product } = useGetProduct(serverProduct);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(setTitle(product.title));
		return () => {
			dispatch(setTitle(''));
		};
	}, [dispatch, product]);

	return (
		<Wrapper>
			<Container>
				<Loader loading={fetching} />
				{error || ''}
				{product && (
					<Flexbox nowrap gap={30}>
						<Info>
							<LayerBlock>
								<RatingStars rating={Number(product.rating)} />
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
									<p>
										<strong>Category:</strong> {product.category}
									</p>
									<p>
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, cum facere,
										fugiat suscipit soluta quam consequuntur eius provident deserunt nobis ipsum?
										Error, saepe at? Totam ipsum quo exercitationem ut consectetur illum tempore
										repellat rerum vel voluptate neque reprehenderit repudiandae, a deleniti,
										possimus expedita corrupti. Cupiditate officiis debitis sunt unde, optio
										accusantium consequuntur voluptas error eius soluta, tenetur a eaque ratione
										harum esse earum facilis cumque ea quaerat non accusamus repudiandae labore
										omnis. Obcaecati ratione dolorum consequuntur rerum, cupiditate consectetur,
										alias quos repellat mollitia quasi quis labore accusantium perferendis illum!
										Ipsa vitae rem excepturi, modi, voluptas quidem ducimus, in voluptatum
										architecto aliquid dolor atque consectetur tenetur provident cumque recusandae
										itaque amet non consequatur tempora ut accusantium nesciunt tempore commodi.
										Velit, deleniti illo eum incidunt dicta quaerat non exercitationem iste
										corrupti, totam praesentium, quam illum. Deleniti perferendis soluta magni
										molestiae veritatis, labore reprehenderit laborum velit inventore exercitationem
										facilis debitis delectus officia pariatur numquam minus, voluptatum error
										expedita voluptas? Tempore iure asperiores fugiat autem architecto, esse minus,
										in accusamus odit, inventore sit placeat cumque quia. Est ex obcaecati rem nihil
										repudiandae.
									</p>
								</span>
							</LayerBlock>
						</Info>
						<SideBlock>
							<LayerBlock>
								<PriceBlock>
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
							</LayerBlock>
						</SideBlock>
					</Flexbox>
				)}
			</Container>
		</Wrapper>
	);
}

export default ContentProduct;
