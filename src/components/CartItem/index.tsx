import { FC } from 'react';

import { Space } from '@/components/Space';
import { IProduct } from '@/interfaces';

import classes from './cartitem.module.scss';

interface CartItemTypes {
	product: IProduct;
}

const CartItem: FC<CartItemTypes> = ({ product }) => (
	<div className={classes.item}>
		<img src={product.image} alt={product.title} />
		<div className={classes.title}>
			<strong>{product.title}</strong>
			{product.rating?.count && <div>count: {product.rating?.count}</div>}
		</div>
		<Space />
		<div className={classes.price}>{product.price} €</div>
	</div>
);

export { CartItem };
export default CartItem;
