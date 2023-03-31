import { MotionProps } from 'framer-motion';
import Link from 'next/link';
import { FC, useState } from 'react';

import { RatingStars, Space } from '@/components/Layout';
import { ButtonUI, Favorite, Loader } from '@/components/ui';
import { currency } from '@/constants';
import { useAppSelector } from '@/hooks';
import { IProduct } from '@/interfaces';
import { productsStore } from '@/store';
import { moveToCart, toggleFav } from '@/store/reducers/combineActions';

import { LazyImageProductCard } from './LazyImageProductCard';
import { Description, Help, Price, ProductWrapper, Title, Tools, WrapperImage } from './styled';

interface ProductType extends MotionProps {
	product: IProduct;
}

export const ProductCard: FC<ProductType> = ({ product, ...props }) => {
	const [viewDescription, setViewDescription] = useState<boolean>(false);
	const link = `/product/${product.id}`;
	const img = product?.thumbnail;
	const { fetching } = useAppSelector(productsStore);

	const handleChecked = () => {
		moveToCart(Number(product.id));
	};

	return (
		<ProductWrapper {...props}>
			<Favorite onActive={() => toggleFav(product.id)} active={product.favorite} />
			<WrapperImage id={`id-${product.id}`}>
				<Link href={link}>
					<Loader loading={product.imgFetch} />

					{!fetching && (
						<LazyImageProductCard src={img} alt={product.title} productId={product.id} threshold={-50} />
					)}
				</Link>
			</WrapperImage>
			<Help type="button" onClick={() => setViewDescription((prev) => !prev)}>
				Description {viewDescription ? '-' : '+'}
			</Help>
			<Description open={viewDescription}>{product.description}</Description>
			<Space />
			<Tools>
				<Price>
					{product.price} {currency}
				</Price>
				<RatingStars rating={Number(product.rating)} />
			</Tools>
			<Title href={link}>{product.title}</Title>
			<ButtonUI primary onClick={handleChecked} disabled={product.checked}>
				{product.checked ? 'Added' : 'Add to cart'}
			</ButtonUI>
		</ProductWrapper>
	);
};

export default ProductCard;
