import { MotionProps } from 'framer-motion';
import Link from 'next/link';
import { memo, useState } from 'react';

import { RatingStars, Space } from '@/components/Layout';
import { ButtonUI, Favorite } from '@/components/ui';
import { currency, IProduct, useAppDispatch } from '@/services';
import { moveToCart } from '@/store/reducers/combineActions';
import { toggleFavorite } from '@/store/reducers/products';

import { Description, Help, Price, ProductWrapper, Title, Tools } from './styled';
import { WrapperImages } from './WrapperImage';

interface ProductType extends MotionProps {
	product: IProduct;
}

export const ProductCard = memo(({ product, ...props }: ProductType) => {
	const [viewDescription, setViewDescription] = useState<boolean>(false);
	const link = `/product/${product.id}`;
	const dispatch = useAppDispatch();

	const handleChecked = () => {
		moveToCart(Number(product.id));
	};

	return (
		<ProductWrapper {...props}>
			<Favorite onActive={() => dispatch(toggleFavorite(Number(product.id)))} active={product.favorite} />
			<Link href={link}>
				<WrapperImages product={product} size={300} />
			</Link>
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
});

export default ProductCard;
