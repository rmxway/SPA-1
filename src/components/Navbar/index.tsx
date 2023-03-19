import { FC, memo, ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { navbarItems } from '@/API/navbar';
import { Container, Flexbox, Space } from '@/components/Layout';
import { useAppSelector } from '@/hooks';
import { productsStore } from '@/store';

import { Count } from './Count';
import { NavbarCart } from './NavbarCart';
import { Line, Logo, StyledNavbar } from './styled';

interface NavLinkProps {
	title?: string;
	address: string;
	component?: ReactNode;
	count?: number;
}

const NavLinkMotion = memo(({ title, address, component, count }: NavLinkProps) => (
	<NavLink to={address}>
		{({ isActive }) => (
			<>
				{title || component}

				<Count {...{ count }} />

				{isActive ? (
					<Line
						layoutId="underline"
						transition={{ duration: 0.2, type: 'spring', stiffness: 200, damping: 22 }}
					/>
				) : null}
			</>
		)}
	</NavLink>
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
					<Link to="/">
						<Logo>
							GS
							<span>
								Green Shop <br />
								Brand
							</span>
						</Logo>
					</Link>
					<Space />
					{renderNavBar(countFavorites)}
				</Flexbox>
			</Container>
		</StyledNavbar>
	);
};

export { Navbar };
export default Navbar;
