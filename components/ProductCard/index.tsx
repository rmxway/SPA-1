import { MotionProps } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';

import { RatingStars, Space } from '@/components/Layout';
import { Button, Favorite, Sticker } from '@/components/ui';
import { currency, IProduct, useAppDispatch } from '@/services';
import { moveToCart } from '@/store/reducers/combineActions';
import { toggleFavorite } from '@/store/reducers/products';

import { Price, ProductWrapper, Title, Tools } from './styled';
import { WrapperImages } from './WrapperImage';

interface ProductType extends MotionProps {
	product: IProduct;
}

export const ProductCard: FC<ProductType> = ({ product, ...props }) => {
	const link = `/product/${product.id}`;
	const dispatch = useAppDispatch();

	const handleChecked = () => {
		moveToCart(Number(product.id));
	};

	return (
		<ProductWrapper {...props}>
			{product.discountPercentage && <Sticker $danger>-{Math.round(product.discountPercentage)}%</Sticker>}
			<Favorite onActive={() => dispatch(toggleFavorite(Number(product.id)))} active={product.favorite} />
			<Link href={link}>
				<WrapperImages product={product} size={300} />
			</Link>
			<Title href={link}>
				<div>{product.title}</div>
				<span>{product.brand}</span>
			</Title>
			<Space />
			<Tools>
				<RatingStars rating={Number(product.rating)} />
				<Price>
					{product.price} {currency}
				</Price>
			</Tools>
			<Button $primary onClick={handleChecked} disabled={product.checked}>
				{product.checked ? 'Added' : 'Add to cart'}
			</Button>
		</ProductWrapper>
	);
};

export default ProductCard;
