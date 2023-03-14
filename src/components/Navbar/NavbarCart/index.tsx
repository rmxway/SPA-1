import { FC, PropsWithChildren } from 'react';

import { useAppSelector } from '@/hooks';
import { cartStore } from '@/store';

import { Cart, Count } from './styled';

const NavbarCart: FC<PropsWithChildren> = ({ children }) => {
	const { items } = useAppSelector(cartStore);

	return (
		<Cart>
			{children}
			<i className="icofont icofont-cart" />
			{items.length ? <Count>{items.length}</Count> : null}
		</Cart>
	);
};

export { NavbarCart };
export default NavbarCart;
