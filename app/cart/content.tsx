'use client';

import { AnimatePresence, LayoutGroup } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { CartItem, Pagination } from '@/components';
import { cartVariant } from '@/components/CartItem/styled';
import { Container, LayerBlock } from '@/components/Layout';
import { ButtonUI, LinkIcon, Modal } from '@/components/ui';
import { currency, useAppSelector } from '@/services';
import { cartStore } from '@/store';
import { changePage } from '@/store/reducers/cart';
import { removeAllProducts } from '@/store/reducers/combineActions';
import { currentItemsMemoized } from '@/store/reducers/commonSelectors';

import { Cart, contentVariant, Sidebar, Title, Total, Wrapper } from './styled';

export const ContentCart = () => {
	const [modalShow, setModalShow] = useState(false);
	const { items, totalPrice, countPerPage, page } = useAppSelector(cartStore);
	const [isItems, setIsItems] = useState<boolean>(!!items.length);

	const currentItems = currentItemsMemoized(useAppSelector(cartStore), items);

	const handleTrashAllProducts = () => {
		setIsItems(!!items.length);
		setModalShow(false);
		removeAllProducts();
	};

	useEffect(() => {
		setIsItems(!!items.length);
	}, [items]);

	return (
		<Container $pt>
			<Cart>
				<LayoutGroup>
					<Wrapper variants={contentVariant} initial="hidden" animate="visible" key="wrapper">
						{isItems && (
							<LinkIcon icon="trash" initial onClick={() => setModalShow(true)}>
								Delete All
							</LinkIcon>
						)}

						<Modal open={modalShow} onClose={() => setModalShow(false)} title="Delete all">
							<div>Sure you want to delete all products from cart ?</div>
							<br />
							<ButtonUI danger onClick={handleTrashAllProducts}>
								Delete
							</ButtonUI>
						</Modal>

						<AnimatePresence mode="popLayout">
							{isItems &&
								currentItems.map((item, idx) => (
									<CartItem
										key={item.id}
										product={item}
										layout
										variants={cartVariant}
										initial="hidden"
										animate="visible"
										exit={{ opacity: 0, scale: isItems ? 0.9 : 1 }}
										transition={{
											dumping: 30,
											delay: 0.03 * idx,
										}}
									/>
								))}
						</AnimatePresence>

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
						{isItems && <Pagination layout {...{ changePage, items, countPerPage, page }} />}
					</Wrapper>

					<Sidebar layoutId="sidebar">
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
				</LayoutGroup>
			</Cart>
		</Container>
	);
};
