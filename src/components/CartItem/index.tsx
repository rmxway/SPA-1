/* eslint-disable jsx-a11y/control-has-associated-label */
import { FC } from 'react';

import { Space } from '@/components/Layout';
import { useAppDispatch } from '@/hooks';
import { IProduct } from '@/interfaces';
import { deleteFromCart } from '@/store/reducers/cart';
import { toggleProduct } from '@/store/reducers/products';

import { Delete, Item, Price, Title } from './styled';

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
		<Item>
			<img src={product.thumbnail} alt={product.title} />
			<Title>
				<strong>{product.title}</strong>
				{/* {product.rating?.count && <div>count: {product.rating?.count}</div>} */}
			</Title>
			<Space />
			<Price>{product.price} €</Price>
			<Delete type="button" onClick={handleDeleteFromCart}>
				<i className="icofont icofont-times-small" />
			</Delete>
		</Item>
	);
};

export { CartItem };
export default CartItem;
