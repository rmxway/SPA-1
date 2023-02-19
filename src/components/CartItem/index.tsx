import { FC } from 'react';

import { Flexbox, Space } from '@/components/Layout';
import { currency } from '@/constants';
import { IProduct } from '@/interfaces';
import { removeFromCart } from '@/store/reducers/combineActions';

import { Delete, Item, Price, Title } from './styled';

const CartItem: FC<{ product: IProduct }> = ({ product }) => (
	<Item>
		<Flexbox align="center" justify="flex-start" nowrap>
			<img src={product.thumbnail} alt={product.title} />
			<Flexbox nowrap justify='space-between'>
				<Title>
					<strong>{product.title}</strong>
					<div>{product.description}</div>
				</Title>
                <Space />
				<Price>
					{product.price} {currency}
				</Price>
			</Flexbox>
		</Flexbox>
		<Delete type="button" onClick={() => removeFromCart(Number(product.id))}>
			<i className="icofont icofont-times-small" />
		</Delete>
	</Item>
);

export { CartItem };
export default CartItem;
