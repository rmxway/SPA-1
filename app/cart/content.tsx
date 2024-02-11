'use client';

import { AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { MCartItem } from '@/components';
import { cartVariant } from '@/components/CartItem/styled';
import { Container, LayerBlock } from '@/components/Layout';
import { ButtonUI, LinkIcon } from '@/components/ui';
import { currency, useAppSelector } from '@/services';
import { cartStore } from '@/store';
import { removeAllProducts } from '@/store/reducers/combineActions';

import { Cart, contentVariant, Sidebar, Title, Total, Wrapper } from './styled';

export const ContentCart = () => {
	const { items, totalPrice } = useAppSelector(cartStore);
	const [isItems, setIsItems] = useState<boolean>(!!items.length);

	const handleTrashAllProducts = () => {
		setIsItems((prev) => !prev);
		removeAllProducts();
	};

	useEffect(() => {
		setIsItems(!!items.length);
	}, [items]);

	return (
		<Container $pt>
			<Cart>
				<Wrapper variants={contentVariant} initial="hidden" animate="visible" key="wrapper">
					<AnimatePresence mode="sync">
						{isItems && (
							<LinkIcon icon="trash" onClick={handleTrashAllProducts}>
								Delete All
							</LinkIcon>
						)}

						{isItems &&
							items.map((item) => (
								<MCartItem
									key={item.id}
									product={item}
									layout
									variants={cartVariant}
									exit={{ opacity: 0, scale: isItems ? 0.9 : 1 }}
								/>
							))}

						{!isItems && (
							<LayerBlock
								$fixedPadding
								layout
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
							>
								No items, please go to&nbsp;<Link href="/products">products page</Link>
								<br />
							</LayerBlock>
						)}
					</AnimatePresence>
				</Wrapper>

				<AnimatePresence>
					<Sidebar layout="preserve-aspect" key="sidebar">
						<Title>Your order</Title>
						<Total>
							Total:
							<span>
								{totalPrice} {currency}
							</span>
						</Total>
						<ButtonUI primary disabled={totalPrice === 0}>
							Checkout
						</ButtonUI>
					</Sidebar>
				</AnimatePresence>
			</Cart>
		</Container>
	);
};
