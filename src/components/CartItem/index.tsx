import { FC } from 'react';

import { Space } from '@/components/Layout';
import { currency } from '@/constants';
import { IProduct } from '@/interfaces';
import { removeFromCart } from '@/store/reducers/combineActions';

import { Delete, Item, Price, Title } from './styled';

const CartItem: FC<{ product: IProduct }> = ({ product }) => (
	<Item>
		<img src={product.thumbnail} alt={product.title} />
		<Title>
			<strong>{product.title}</strong>
		</Title>
		<Space />
		<Price>
			{product.price} {currency}
		</Price>
		<Delete type="button" onClick={() => removeFromCart(Number(product.id))}>
			<i className="icofont icofont-times-small" />
		</Delete>
	</Item>
);

export { CartItem };
export default CartItem;
