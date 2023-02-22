import { FC, ReactNode } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
				<NavLinkMotion title="Main" address="/" />
				<NavLinkMotion title="UI" address="/ui" />
				<NavLinkMotion title="Products" address="/products" />
				<NavLinkMotion address="/cart" component={<NavbarCart />} />
			</Flexbox>
		</Container>
	</StyledNavbar>
);

export { Navbar };
export default Navbar;
