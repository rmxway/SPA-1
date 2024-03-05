'use client';

import { AnimatePresence, LayoutGroup } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

import { CartItem, Pagination } from '@/components';
import { cartVariant } from '@/components/CartItem/styled';
import { Container, LayerBlock } from '@/components/Layout';
import { Button, LinkIcon, Modal } from '@/components/ui';
import { currency, useAppSelector } from '@/services';
import { cartStore } from '@/store';
import { changePage } from '@/store/reducers/cart';
import { removeAllProducts } from '@/store/reducers/combineActions';
import { currentItemsMemoized } from '@/store/reducers/commonSelectors';

import { Cart, contentVariant, Sidebar, Title, Total, Wrapper } from './styled';

export const ContentCart = () => {
	const [modalShow, setModalShow] = useState(false);
	const { items, totalPrice, countPerPage, page } = useAppSelector(cartStore);
	const isItems = !!items.length;

	const currentItems = currentItemsMemoized(useAppSelector(cartStore), items);

	const handleTrashAllProducts = () => {
		setModalShow(false);
		removeAllProducts();
	};

	return (
		<Container $pt>
			<Modal open={modalShow} onClose={() => setModalShow(false)} title="Delete all">
				<div>Sure you want to delete all products from cart ?</div>
				<br />
				<Button $danger onClick={handleTrashAllProducts}>
					Delete
				</Button>
			</Modal>
			<Cart>
				<LayoutGroup>
					<Wrapper variants={contentVariant} initial="hidden" animate="visible" key="wrapper">
						{isItems && (
							<LinkIcon icon="trash" onClick={() => setModalShow(true)}>
								Delete All
							</LinkIcon>
						)}
						<AnimatePresence mode="popLayout">
							{currentItems?.length !== 0 &&
								currentItems?.map((item, idx) => (
									<CartItem
										layout
										key={item.id}
										product={item}
										variants={cartVariant}
										initial="hidden"
										animate="visible"
										exit={{ opacity: 0, scale: isItems ? 0.9 : 1 }}
										transition={{
											duration: 0.35,
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
						{isItems && (
							<Pagination
								layout
								transition={{ delay: 0.03 }}
								{...{ changePage, items, countPerPage, page }}
							/>
						)}
					</Wrapper>

					<Sidebar layoutId="sidebar">
						<Title>Your order</Title>
						<Total>
							Total:
							<span>
								{totalPrice} {currency}
							</span>
						</Total>
						<Button $primary disabled={totalPrice === 0}>
							Checkout
						</Button>
					</Sidebar>
				</LayoutGroup>
			</Cart>
		</Container>
	);
};
