import { FC, useState } from 'react';

import { LazyImage, RatingStars, Space } from '@/components/Layout';
import { ButtonUI, Loader } from '@/components/ui';
import { useAppDispatch } from '@/hooks';
import { IProduct } from '@/interfaces';
import { moveToCart } from '@/store/reducers/combineActions';
import { fetchingImageProduct } from '@/store/reducers/products';

import { Description, Help, Price, ProductWrapper, Title, Tools, WrapperImage } from './styled';

interface ProductType {
	product: IProduct;
	index: number;
}

const ProductCard: FC<ProductType> = ({ product, ...props }) => {
	const [viewDescription, setViewDescription] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const link = `/product/${product.id}`;

	return (
		<ProductWrapper {...props}>
			<WrapperImage to={link}>
				{product.imgFetch ? (
					<>
						<Loader loading={product.imgFetch} />
						<LazyImage
							src={product.image}
							alt={product.title}
							threshold={-200}
							effect="blur"
							afterLoad={() =>
								setTimeout(
									() => dispatch(fetchingImageProduct({ id: Number(product.id), fetch: false })),
									1000
								)
							}
						/>
					</>
				) : (
					<img src={product.image} alt={product.title} />
				)}
			</WrapperImage>
			<Help type="button" onClick={() => setViewDescription((prev) => !prev)}>
				Description {viewDescription ? '-' : '+'}
			</Help>
			<Description open={viewDescription}>{product.description}</Description>
			<Space />
			<Tools>
				<Price>{product.price} €</Price>
				<RatingStars rating={product.rating?.rate} />
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