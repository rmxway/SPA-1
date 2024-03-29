import Link from 'next/link';
import { useMemo, useState } from 'react';

import { Container, Flexbox, Space } from '@/components/Layout';
import { Button } from '@/components/ui';
import { navbarItems } from '@/mock/navbar';
import { useAppSelector, useMediaQuery } from '@/services';
import { cartStore, productsStore } from '@/store';
import { clearStore } from '@/store/localStore';
import { breakpoints } from '@/theme';

import { NavCountItem } from './NavCountItem';
import { NavbarProps, NavLink } from './NavLink';
import { BurgerButton, Logo, StyledNavbar, variantsWrapperNavbar, WrapperNavbarItems } from './styled';

const RenderNavBar = () => {
	const [open, setOpen] = useState(false);
	const { countFavorites } = useAppSelector(productsStore);
	const { items } = useAppSelector(cartStore);
	const countCartItems = items.length;

	const match = useMediaQuery(breakpoints.md);

	useMemo(() => {
		if (!match) setOpen(false);
	}, [match]);

	const animatedMobileMenu = () => {
		if (match) return open ? 'visible' : 'hidden';
		return undefined;
	};

	const handleClickBurger = () => {
		setOpen((prev) => !prev);
	};

	return (
		<>
			<BurgerButton $black onClick={handleClickBurger} $isOpen={open}>
				<span />
				<span />
				<span />
			</BurgerButton>
			<WrapperNavbarItems
				variants={variantsWrapperNavbar}
				animate={animatedMobileMenu()}
				transition={{ duration: 0.3, type: 'spring', stiffness: 250, damping: 20 }}
			>
				{navbarItems.map(({ title, url }) => {
					const props: NavbarProps = {
						title,
						url,
					};

					// NavCountItem добавляется в пропсы к компоненту NavLinkMotion.component

					if (title === 'Favorites') {
						props.component = <NavCountItem title="favorite-fill" count={countFavorites} />;
					}

					if (title === 'Cart') {
						props.component = <NavCountItem title="cart" count={countCartItems} />;
					}

					return <NavLink key={url} onClick={() => setOpen(false)} {...props} />;
				})}
			</WrapperNavbarItems>
		</>
	);
};

export const Navbar = () => (
	<StyledNavbar>
		<Container>
			<Flexbox $align="center" $nowrap $gap={10}>
				<Logo>
					<Link href="/" />
					GS
					<span>
						Green Shop <br />
						Brand
					</span>
				</Logo>
				<Button $black onClick={() => clearStore()} style={{ flexShrink: 0 }}>
					Clear storage
				</Button>
				<Space />
				<RenderNavBar />
			</Flexbox>
		</Container>
	</StyledNavbar>
);

export default Navbar;
