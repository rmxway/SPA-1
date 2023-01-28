import { FC } from 'react';

import { useAppSelector } from '@/hooks';
import { cartStore } from '@/store/store';

import classes from './cart.module.scss';

const NavbarCart: FC = () => {
	const { items } = useAppSelector(cartStore);

	return (
		<div className="cart-wrapper">
			<div className={classes.cart}>
				Cart
				<i className="icofont icofont-cart" />
				{items.length ? <div className={classes.count}>{items.length}</div> : null}
			</div>
		</div>
	);
};

export { NavbarCart };
export default NavbarCart;
