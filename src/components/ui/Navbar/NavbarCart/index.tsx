import { FC } from 'react';

import { useAppSelector } from '@/hooks';
import { cartStore } from '@/store';

import { Cart, Count } from './styled';

const NavbarCart: FC = () => {
	const { items } = useAppSelector(cartStore);

	return (
		<Cart>
			Cart
			<i className="icofont icofont-cart" />
			{items.length ? <Count>{items.length}</Count> : null}
		</Cart>
	);
};

export { NavbarCart };
export default NavbarCart;
