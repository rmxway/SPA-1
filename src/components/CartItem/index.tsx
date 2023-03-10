import { motion } from 'framer-motion';
import { forwardRef } from 'react';
import { Link } from 'react-router-dom';

import { Space } from '@/components/Layout';
import { currency } from '@/constants';
import { IProduct } from '@/interfaces';
import { removeFromCart } from '@/store/reducers/combineActions';

import { Content, Delete, elementsVars, Item, Price, Title, WrapperText } from './styled';

interface Props {
	product: IProduct;
}

const CartItem = forwardRef<HTMLDivElement, Props>(({ product, ...props }, ref) => (
	<Item ref={ref} {...props}>

		<Content layout variants={elementsVars}>
			<img src={product.thumbnail} alt={product.title} />
			<WrapperText>
				<Title>
					<Link to={`/product/${product.id}`}><strong>{product.title}</strong></Link>
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
));

CartItem.displayName = 'CartItem';

export { CartItem };
export default CartItem;

export const MCartItem = motion(CartItem);
