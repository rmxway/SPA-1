import 'react-lazy-load-image-component/src/effects/blur.css';

import { FC, useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Space } from '@/components/Layout';
import { ButtonUI, Loader } from '@/components/ui';
import { useAppDispatch } from '@/hooks';
import { IProduct } from '@/interfaces';
import { addToCart } from '@/store/reducers/cart';
import { fetchingImageProduct, toggleProduct } from '@/store/reducers/products';

import { Description, Help, Price, ProductWrapper, Rating, Title, Tools, WrapperImage } from './styled';

interface ProductType {
	product: IProduct;
	index: number;
}

const Product: FC<ProductType> = ({ product, ...props }) => {
	const [viewDescription, setViewDescription] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const handleClickAddToCart = () => {
		dispatch(toggleProduct(product));
		dispatch(addToCart(product));
	};

	return (
		<ProductWrapper {...props}>
			<Title>{product.title}</Title>
			<WrapperImage>
				{product.imgFetch ? (
					<>
						<Loader loading={product.imgFetch} />
						<LazyLoadImage
							src={product.image}
							alt={product.title}
							afterLoad={() =>
								setTimeout(
									() => dispatch(fetchingImageProduct({ id: Number(product.id), fetch: false })),
									1000
								)
							}
							threshold={-200}
							effect="blur"
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
			<Price>
				{product.price} €
				<Tools>
					<div>
						<span>in store</span> ({product.rating?.count})
					</div>
					<div>
						<span>rating: </span>
						<Rating>{product.rating?.rate}</Rating>
					</div>
				</Tools>
			</Price>
			<ButtonUI primary onClick={handleClickAddToCart} disabled={product.checked}>
				{product.checked ? 'Added to card' : 'Add to card'}
			</ButtonUI>
		</ProductWrapper>
	);
};

export { Product };
export default Product;
