import Link from 'next/link';
import { FC, memo, ReactNode } from 'react';

import { Container, Flexbox, Space } from '@/components/Layout';
import { useAppSelector } from '@/hooks';
import { navbarItems } from '@/mock/navbar';
import { productsStore } from '@/store';

import { Count } from './Count';
import { NavbarCart } from './NavbarCart';
import { Logo, NavbarItem, StyledNavbar } from './styled';

interface NavLinkProps {
	title?: string;
	address: string;
	component?: ReactNode;
	count?: number;
}

const NavLinkMotion = memo(({ title, address, component, count }: NavLinkProps) => (
	<NavbarItem>
		<Link href={address} />
		{title || component}
		{count ? <Count {...{ count }} /> : null}

		{/* {active ? (
						<Line
							layoutId="underline"
							transition={{ duration: 0.2, type: 'spring', stiffness: 200, damping: 22 }}
						/>
					) : null} */}
	</NavbarItem>
));

NavLinkMotion.displayName = 'NavLinkMotion';

interface navbarTypes {
	title?: string;
	address: string;
	component?: ReactNode;
}

const renderNavBar = (count: number) =>
	navbarItems.map(({ title, url }) => {
		const props: navbarTypes = {
			title,
			address: url,
		};

		if (title === 'Cart') {
			props.title = '';
			props.component = <NavbarCart>{title}</NavbarCart>;
		}

		if (title === 'Favorites') {
			return <NavLinkMotion key={url} {...props} {...{ count }} />;
		}

		return <NavLinkMotion key={url} {...props} />;
	});

const Navbar: FC = () => {
	const { fetchedItems } = useAppSelector(productsStore);
	const countFavorites = fetchedItems.filter((item) => item.favorite).length;
	return (
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
					{renderNavBar(countFavorites)}
				</Flexbox>
			</Container>
		</StyledNavbar>
	);
};

export { Navbar };
export default Navbar;
