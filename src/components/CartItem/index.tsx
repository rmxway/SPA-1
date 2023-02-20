import { FC } from 'react';

import { Space } from '@/components/Layout';
import { currency } from '@/constants';
import { IProduct } from '@/interfaces';
import { removeFromCart } from '@/store/reducers/combineActions';

import { Content, Delete, Item, Price, Title, WrapperText } from './styled';

const CartItem: FC<{ product: IProduct }> = ({ product }) => (
	<Item>
		<Content>
			<img src={product.thumbnail} alt={product.title} />
			<WrapperText>
				<Title>
					<strong>{product.title}</strong>
					<span>{product.description}</span>
				</Title>
				<Space />
				<Price>
					{product.price} {currency}
				</Price>
			</WrapperText>
		</Content>
		<Delete type="button" onClick={() => removeFromCart(Number(product.id))}>
			<i className="icofont icofont-times-small" />
		</Delete>
	</Item>
);

export { CartItem };
export default CartItem;
