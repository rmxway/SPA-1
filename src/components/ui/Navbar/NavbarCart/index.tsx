import { FC } from 'react';

import { useProductsContext } from '@/components/providers/ProductsProvider';

import classes from './cart.module.scss';

const NavbarCart: FC = () => {
	const { cart } = useProductsContext();

	return (
		<div className="cart-wrapper">
			<div className={classes.cart}>
				Cart
				<i className="icofont icofont-cart" />
				{cart.length ? <div className={classes.count}>{cart.length}</div> : null}
			</div>
		</div>
	);
};

export { NavbarCart };
export default NavbarCart;
