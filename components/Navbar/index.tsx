import Link from 'next/link';
import { ReactNode } from 'react';

import { Container, Flexbox, Space } from '@/components/Layout';
import { navbarItems } from '@/mock/navbar';
import { useAppSelector } from '@/services';
import { cartStore, productsStore } from '@/store';

import { NavCountItem } from './NavCountItem';
import { NavLinkMotion } from './NavLinkMotion';
import { Logo, StyledNavbar } from './styled';

interface navbarTypes {
	title?: string;
	url: string;
	component?: ReactNode;
}

const RenderNavBar = () => {
	const { countFavorites } = useAppSelector(productsStore);
	const { items } = useAppSelector(cartStore);
	const countCartItems = items.length;

	return navbarItems.map(({ title, url }) => {
		const props: navbarTypes = {
			title,
			url,
		};

		// NavCountItem добавляется в пропсы к компоненту NavLinkMotion

		if (title === 'Favorites') {
			props.component = <NavCountItem title="favorite-fill" count={countFavorites} />;
		}

		if (title === 'Cart') {
			props.component = <NavCountItem title="cart" count={countCartItems} />;
		}

		return <NavLinkMotion key={url} {...props} />;
	});
};

export const Navbar = () => (
	<StyledNavbar>
		<Container>
			<Flexbox align="center" nowrap>
				<Logo>
					<Link href="/" />
					GS
					<span>
						Green Shop <br />
						Brand
					</span>
				</Logo>
				<Space />
				<RenderNavBar />
			</Flexbox>
		</Container>
	</StyledNavbar>
);

export default Navbar;
