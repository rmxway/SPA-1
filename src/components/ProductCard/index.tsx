import { MotionProps } from 'framer-motion';
import { memo, useState } from 'react';
import { Link } from 'react-router-dom';

import { RatingStars, Space } from '@/components/Layout';
import { ButtonUI, Favorite, Loader } from '@/components/ui';
import { currency } from '@/constants';
import { useAppDispatch, useAppSelector } from '@/hooks';
import { IProduct } from '@/interfaces';
import { productsStore } from '@/store';
import { moveToCart } from '@/store/reducers/combineActions';
import { toggleFavorite } from '@/store/reducers/products';

import { LazyImageProductCard } from './LazyImageProductCard';
import { Description, Help, Price, ProductWrapper, Title, Tools, WrapperImage } from './styled';

interface ProductType extends MotionProps {
	product: IProduct;
}

const ProductCard = memo(({ product, ...props }: ProductType) => {
	const [viewDescription, setViewDescription] = useState<boolean>(false);
	const link = `/product/${product.id}`;
	const img = product?.thumbnail;
	const { fetching } = useAppSelector(productsStore);
	const dispatch = useAppDispatch();

	const handleChecked = () => {
		moveToCart(Number(product.id));
	};

	const handleFavorite = () => {
		dispatch(toggleFavorite(Number(product.id)));
	};

	return (
		<ProductWrapper {...props}>
			<Favorite onActive={handleFavorite} active={product.favorite} />
			<WrapperImage>
				<Link to={link}>
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
			<Title to={link}>{product.title}</Title>
			<ButtonUI primary onClick={handleChecked} disabled={product.checked}>
				{product.checked ? 'Added' : 'Add to cart'}
			</ButtonUI>
		</ProductWrapper>
	);
});

ProductCard.displayName = 'ProductCard';

export { ProductCard };
export default ProductCard;
