import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CartItem } from '@/components/CartItem';
import { useProductsContext } from '@/components/providers/ProductsProvider';

import classes from './cart.module.scss';

const CartPage: FC = () => {
	const { cart, totalPrice } = useProductsContext();

	return (
		<>
			<h1>Cart</h1>
			<div className={classes.cart}>
				{cart.length ? (
					<>
						<div className={classes.wrapper}>
							{cart.map((item) => (
								<CartItem product={item} key={item.id} />
							))}
						</div>
						<div className={classes.sidebar}>
							<div className={classes.title}>Your order</div>
							<div className={classes.total}>
								Total:
								<span>{totalPrice()} €</span>
							</div>
						</div>
					</>
				) : (
					<>
						No items, please go to&nbsp;<Link to="/products">products page</Link>
					</>
				)}
			</div>
		</>
	);
};

export { CartPage };
export default CartPage;
