import cl from 'classnames';
import { FC, useState } from 'react';

import { Space } from '@/components/Space';
import { ButtonUI } from '@/components/ui/Button';
import { useAppDispatch } from '@/hooks';
import { IProduct } from '@/interfaces';
import { addToCart } from '@/store/reducers/cart';

import classes from './product.module.scss';

interface TypePost {
	product: IProduct;
	index: number;
}

const Product: FC<TypePost> = ({ product, ...props }) => {
	const [viewDescription, setViewDescription] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const ratingColor = (): string => {
		if (product.rating?.rate) {
			if (product.rating.rate > 4) return '#02af27'; // green
			if (product.rating.rate < 4 && product.rating.rate > 3) return '#c5b010'; // yellow
			if (product.rating.rate < 3) return '#e64b4b'; // red
		}
		return '#222';
	};

	return (
		<div {...props} className={classes.product}>
			<div className={classes.title}>{product.title}</div>
			<img src={product.image} alt={product.title} />
			<button type="button" className={classes.help} onClick={() => setViewDescription((prev) => !prev)}>
				Description {viewDescription ? '-' : '+'}
			</button>
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
						<span style={{ color: `${ratingColor()}` }}>{product.rating?.rate}</span>
					</div>
				</div>
			</div>
			<ButtonUI primary onClick={() => dispatch(addToCart(product))}>
				Add to card
			</ButtonUI>
		</div>
	);
};

export { Product };
export default Product;
