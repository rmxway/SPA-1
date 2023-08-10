import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';

import { Space } from '@/components/Layout';
import { currency, IProduct } from '@/services';
import { removeFromCart } from '@/store/reducers/combineActions';

import { Content, Delete, elementsVars, Item, Price, Title, WrapperText } from './styled';

interface Props {
	product: IProduct;
}

export const CartItem = forwardRef<HTMLDivElement, Props>(({ product, ...props }, ref) => (
	<Item ref={ref} {...props}>
		<Content layout variants={elementsVars}>
			<Image src={product.thumbnail} alt={product.title} width={70} height={70} quality={50} />
			<WrapperText>
				<Title>
					<Link href={`/product/${product.id}`}>
						<strong>{product.title}</strong>
					</Link>
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

export default CartItem;

export const MCartItem = motion(CartItem);