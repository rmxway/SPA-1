import { MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef, Ref } from 'react';

import { currency, IProduct } from '@/services';
import { removeFromCart } from '@/store/reducers/combineActions';

import { Content, Count, Delete, elementsVars, Item, Price, Title, WrapperText } from './styled';

interface Props extends MotionProps {
	product: IProduct;
}

export const CartItem = forwardRef(({ product, ...props }: Props, ref: Ref<HTMLDivElement>) => (
	<Item {...props} {...{ ref }}>
		<Content layout variants={elementsVars}>
			<Link href={`/product/${product.id}`}>
				<Image src={product.thumbnail} alt={product.title} width={70} height={70} quality={50} />
			</Link>
			<WrapperText>
				<Title href={`/product/${product.id}`}>
					<strong>{product.title}</strong>
					<span>{product.description}</span>
				</Title>
				<Count>count: {product.count}</Count>
				<Price>
					{product.price} {currency}
				</Price>
			</WrapperText>
			<Delete type="button" onClick={() => removeFromCart(Number(product.id))}>
				<i className="icofont icofont-times-small" />
			</Delete>
		</Content>
	</Item>
));

export default CartItem;
