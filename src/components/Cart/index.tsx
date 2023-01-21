import { FC } from 'react';

import { useProductsContext } from '../providers/ProductsProvider';
import classes from './cart.module.scss';

const Cart: FC = () => {
	const { cart } = useProductsContext();

	return (
		<div className={classes.cart}>
			<i className="icofont icofont-cart" />
			{cart.length ? <div className={classes.count}>{cart.length}</div> : null}
		</div>
	);
};

export { Cart };
export default Cart;
