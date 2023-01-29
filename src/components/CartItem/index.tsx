/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';

import { Space } from '@/components/Space';
import { useAppDispatch } from '@/hooks';
import { IProduct } from '@/interfaces';
import { deleteFromCart } from '@/store/reducers/cart';
import { toggleProduct } from '@/store/reducers/products';

import classes from './cartitem.module.scss';

interface CartItemTypes {
	product: IProduct;
}

const CartItem: FC<CartItemTypes> = ({ product }) => {
	const dispatch = useAppDispatch();

	const handleDeleteFromCart = () => {
		dispatch(toggleProduct(product));
		dispatch(deleteFromCart(product));
	};

	return (
		<div className={classes.item}>
			<img src={product.image} alt={product.title} />
			<div className={classes.title}>
				<strong>{product.title}</strong>
				{product.rating?.count && <div>count: {product.rating?.count}</div>}
			</div>
			<Space />
			<div className={classes.price}>{product.price} €</div>
			<button type="button" className={classes.delete} onClick={handleDeleteFromCart} />
		</div>
	);
};

export { CartItem };
export default CartItem;
