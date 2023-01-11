import React, { FC, useState } from 'react';
import ButtonUI from '@components/ui/Button';
import Space from '@components/Space';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import classes from './product.module.scss';
import { IProduct } from '@src/interfaces';
import cl from 'classnames';

interface TypePost {
	product: IProduct;
	index: number;
	delProduct: Function;
}

const Product: FC<TypePost> = ({ product, index, delProduct, ...props }) => {
	const [viewDescription, setViewDescription] = useState<Boolean>(false);

	const ratingColor = (): string => {
		if (product.rating?.rate) {
			if (product.rating.rate > 4) return '#02af27'; // green
			if (product.rating.rate < 4 && product.rating.rate > 3)
				return '#c5b010'; //yellow
			if (product.rating.rate < 3) return '#e64b4b'; // red
		}
		return '#222';
	};

	return (
		<div {...props} className={classes.product}>
			<div className={classes.title}>{product.title}</div>
			<LazyLoadImage
				src={product.image}
				alt={product.title}
				loading="lazy"
			/>
			<div
				className={classes.help}
				onClick={() => setViewDescription((prev) => !prev)}
			>
				Description {viewDescription ? '-' : '+'}
			</div>
			<div
				className={cl(classes.description, {
					[classes.open]: viewDescription,
				})}
			>
				{product.description}
			</div>
			<Space />
			<div className={classes.price}>
				{product.price} €
				<div className={classes.tools}>
					<div>
						<span>in store</span> ({product.rating?.count})
					</div>
					<div>
						<span>rating: </span>
						<span style={{ color: `${ratingColor()}` }}>
							{product.rating?.rate}
						</span>
					</div>
				</div>
			</div>
			<ButtonUI>Add to card</ButtonUI>
		</div>
	);
};

export default Product;
