import { FC, ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { navbarItems } from '@/API/navbar';
import { Container, Flexbox, Space } from '@/components/Layout';

import { NavbarCart } from './NavbarCart';
import { Line, Logo, StyledNavbar } from './styled';

interface NavLinkProps {
	title?: string;
	address: string;
	component?: ReactNode;
}

const NavLinkMotion: FC<NavLinkProps> = ({ title, address, component }) => (
	<NavLink to={address}>
		{({ isActive }) => (
			<>
				{title || component}
				{isActive ? (
					<Line
						layoutId="underline"
						transition={{ duration: 0.2, type: 'spring', stiffness: 200, damping: 22 }}
					/>
				) : null}
			</>
		)}
	</NavLink>
);

interface navbarTypes {
	title?: string;
	address: string;
	component?: ReactNode;
}

const renderNavBar = () =>
	navbarItems.map(({ title, url }) => {
		const props: navbarTypes = {
			title,
			address: url,
		};

		if (title === 'Cart') {
			props.title = '';
			props.component = <NavbarCart>{title}</NavbarCart>;
		}

		return <NavLinkMotion key={url} {...props} />;
	});

const Navbar: FC = () => (
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
				{renderNavBar()}
			</Flexbox>
		</Container>
	</StyledNavbar>
);

export { Navbar };
export default Navbar;
