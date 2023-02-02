import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CartItem } from '@/components/CartItem';
import { useAppSelector } from '@/hooks';
import { cartStore } from '@/store';

import { Cart, Sidebar, Title, Total, Wrapper } from './styles';

const CartPage: FC = () => {
	const { items, totalPrice } = useAppSelector(cartStore);

	return (
		<>
			<h1>Cart</h1>
			<Cart>
				<Wrapper>
					{items.length ? (
						items.map((item) => <CartItem product={item} key={item.id} />)
					) : (
						<>
							No items, please go to&nbsp;<Link to="/products">products page</Link>
						</>
					)}
				</Wrapper>

				<Sidebar>
					<Title>Your order</Title>
					<Total>
						Total:
						<span>{totalPrice} €</span>
					</Total>
				</Sidebar>
			</Cart>
		</>
	);
};

export { CartPage };
export default CartPage;
