import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Container, Flexbox } from '@/components/Layout';
import { InputUI } from '@/components/ui';

import { NavbarCart } from './NavbarCart';
import { Logo, StyledNavbar } from './styled';

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
				<InputUI name="search-field" className="search" placeholder="Search" disabled />
				<NavLink to="/">Main</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="/cart">
					<NavbarCart />
				</NavLink>
			</Flexbox>
		</Container>
	</StyledNavbar>
);

export { Navbar };
export default Navbar;
