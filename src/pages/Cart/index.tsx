import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CartItem } from '@/components/CartItem';
import { useAppSelector } from '@/hooks';
import { cartStore } from '@/store';

import classes from './cart.module.scss';

const CartPage: FC = () => {
	const { items, totalPrice } = useAppSelector(cartStore);

	return (
		<>
			<h1>Cart</h1>
			<div className={classes.cart}>
				<div className={classes.wrapper}>
					{items.length ? (
						items.map((item) => <CartItem product={item} key={item.id} />)
					) : (
						<>
							No items, please go to&nbsp;<Link to="/products">products page</Link>
						</>
					)}
				</div>

				<div className={classes.sidebar}>
					<div className={classes.title}>Your order</div>
					<div className={classes.total}>
						Total:
						<span>{totalPrice} €</span>
					</div>
				</div>
			</div>
		</>
	);
};

export { CartPage };
export default CartPage;
