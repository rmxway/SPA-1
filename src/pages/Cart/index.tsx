import { AnimatePresence, motion } from 'framer-motion';
import { FC } from 'react';
import { Link } from 'react-router-dom';

import { MCartItem } from '@/components';
import { cartVariant } from '@/components/CartItem/styled';
import { Container } from '@/components/Layout';
import { ButtonUI } from '@/components/ui';
import { currency } from '@/constants';
import { useAppSelector } from '@/hooks';
import { cartStore } from '@/store';

import { Cart, contentVariant, Sidebar, Title, Total, Wrapper } from './styles';

const CartPage: FC = () => {
	const { items, totalPrice } = useAppSelector(cartStore);

	return (
		<Container>
			<h1>Cart</h1>

			<Cart>
				<Wrapper variants={contentVariant} initial="hidden" animate="visible" key="wrapper">
					<AnimatePresence mode="popLayout">
						{items.length ? (
							items.map((item) => (
								<MCartItem
									key={item.id}
									product={item}
									layout
									variants={cartVariant}
									exit={{ opacity: 0, scale: 0.9 }}
								/>
							))
						) : (
							<motion.div layout initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
								No items, please go to&nbsp;<Link to="/products">products page</Link>
								<br />
							</motion.div>
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
						{totalPrice > 0 && (
							<ButtonUI primary disabled>
								Checkout
							</ButtonUI>
						)}
					</Sidebar>
				</AnimatePresence>
			</Cart>
		</Container>
	);
};

export { CartPage };
export default CartPage;
