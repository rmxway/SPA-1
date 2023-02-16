import { FC, useState } from 'react';

import { RatingStars, Space } from '@/components/Layout';
import { ButtonUI, Loader } from '@/components/ui';
import { currency } from '@/constants';
import { IProduct } from '@/interfaces';
import { moveToCart } from '@/store/reducers/combineActions';

import { LazyImageProductCard } from './LazyImageProductCard';
import { Description, Help, Price, ProductWrapper, Title, Tools, WrapperImage } from './styled';

interface ProductType {
	product: IProduct;
	index: number;
}

const ProductCard: FC<ProductType> = ({ product, ...props }) => {
	const [viewDescription, setViewDescription] = useState<boolean>(false);
	const link = `/product/${product.id}`;
	const img = product?.thumbnail;

	return (
		<ProductWrapper {...props}>
			<WrapperImage to={link}>
				<Loader loading={product.imgFetch} />
				<LazyImageProductCard src={img} alt={product.title} productId={product.id} threshold={-200} />
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
			<ButtonUI primary onClick={() => moveToCart(product)} disabled={product.checked}>
				{product.checked ? 'Added' : 'Add to cart'}
			</ButtonUI>
		</ProductWrapper>
	);
};

export { ProductCard };
export default ProductCard;
