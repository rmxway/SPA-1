import React, { FC, useState } from 'react';
import ButtonUI from '@components/ui/Button';
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

	return (
		<div {...props} className={classes.product}>
			<div className={classes.title}>{product.title}</div>
			<img src={product.image} alt={product.image} />
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
			<div className={classes.space} />
			<div className={classes.price}>
				{product.price} $
				<div className={classes.tools}>
					<div>
						<span>Available </span> {product.rating?.count}
					</div>
					<div>
						<span>Rating </span> {product.rating?.rate}
					</div>
				</div>
			</div>
			<ButtonUI>Add to card</ButtonUI>
		</div>
	);
};

export default Product;
