import { PropsWithChildren } from 'react';

import { useAppSelector } from '@/services';
import { cartStore } from '@/store';

import { Count } from '../Count';
import { Cart } from './styled';

function NavbarCart({ children }: PropsWithChildren) {
	const { items } = useAppSelector(cartStore);

	return (
		<Cart>
			{children}
			<i className="icofont icofont-cart" />
			{items.length > 0 ? <Count count={items.length} /> : null}
		</Cart>
	);
}

export { NavbarCart };
export default NavbarCart;
