import { MotionProps } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { forwardRef, Ref } from 'react';
import CountUp from 'react-countup';

import { Icon } from '@/components/ui';
import { currency, IProduct, useAppDispatch } from '@/services';
import { decreaseCount, increaseCount } from '@/store/reducers/cart';
import { removeFromCart } from '@/store/reducers/combineActions';

import { Content, Count, Delete, elementsVars, Item, Price, Title, WrapperText } from './styled';

interface Props extends MotionProps {
	product: IProduct;
}

export const CartItem = forwardRef(({ product, ...props }: Props, ref: Ref<HTMLDivElement>) => {
	const dispatch = useAppDispatch();
	const { id, price, title, description, thumbnail, count } = product;

	return (
		<Item {...props} {...{ ref }}>
			<Content layout variants={elementsVars}>
				<Link href={`/product/${id}`}>
					<Image src={thumbnail} alt={title} width={70} height={70} quality={50} />
				</Link>
				<WrapperText>
					<Title href={`/product/${id}`}>
						<strong>{title}</strong>
						<span>{description}</span>
					</Title>
					{count && (
						<Count>
							<button
								type="button"
								disabled={count === 1}
								onClick={() => dispatch(decreaseCount(Number(id)))}
							>
								-
							</button>{' '}
							{count}{' '}
							<button type="button" onClick={() => dispatch(increaseCount(Number(id)))}>
								+
							</button>
						</Count>
					)}
					{count && price && (
						<Price>
							<CountUp
								startVal={0}
								end={count * price}
								useEasing={false}
								preserveValue
								duration={0.5}
								separator=""
							/>{' '}
							{currency}
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
