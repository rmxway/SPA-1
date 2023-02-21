import { MotionProps } from 'framer-motion';
import { FC } from 'react';

import { Space } from '@/components/Layout';
import { currency } from '@/constants';
import { IProduct } from '@/interfaces';
import { removeFromCart } from '@/store/reducers/combineActions';

import { cartVariant, Content, Delete, elementsVars, Item, Price, Title, WrapperText } from './styled';

interface Props extends MotionProps {
	product: IProduct;
}

const CartItem: FC<Props> = ({ product, ...props }) => (
	<Item layout variants={cartVariant} exit={{ opacity: 0, scale: 0.9 }} transition={{ type: 'tween' }} {...props}>
		<Content layout variants={elementsVars}>
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
