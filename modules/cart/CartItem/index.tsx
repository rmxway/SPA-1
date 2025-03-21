import { MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef } from 'react';

import { Icon } from '@/components/ui';
import { currency, IProduct, useAppDispatch } from '@/services';
import { decreaseCount, increaseCount } from '@/store/reducers/cart';
import { removeFromCart } from '@/store/reducers/combineActions';

import { Content, Count, CountWrapper, Delete, elementsVars, Item, Price, Title, WrapperText } from './styled';

interface Props extends MotionProps {
	product: IProduct;
}

export const CartItem = forwardRef<HTMLDivElement, Props>(({ product, ...props }, ref) => {
	const dispatch = useAppDispatch();
	const { id, price, title, description, thumbnail, count } = product;

	return (
		<Item {...props} {...{ ref }}>
			<Content layout variants={elementsVars}>
				<Link href={`/product/${id}`}>
					{thumbnail && <Image src={thumbnail} alt={title} width={70} height={70} quality={50} />}
				</Link>
				<WrapperText>
					<Title href={`/product/${id}`}>
						<strong>{title}</strong>
						<span>{description}</span>
					</Title>
					{count && (
						<CountWrapper>
							<button
								type="button"
								disabled={count === 1}
								onClick={() => dispatch(decreaseCount(Number(id)))}
							>
								-
							</button>{' '}
							<Count>{count}</Count>
							<button type="button" onClick={() => dispatch(increaseCount(Number(id)))}>
								+
							</button>
						</CountWrapper>
					)}
					{count && price && (
						<Price>
							{(count * price).toFixed(2)} {currency}
						</Price>
					)}
				</WrapperText>
				<Delete type="button" onClick={() => removeFromCart(Number(id))}>
					<Icon icon="times-small" />
				</Delete>
			</Content>
		</Item>
	);
});

export default CartItem;
