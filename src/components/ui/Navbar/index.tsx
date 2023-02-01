import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Container, Flexbox, Space } from '@/components/Layout';

import { NavbarCart } from './NavbarCart';
// import { InputUI } from '@/components/ui/Input';
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
				{/* <InputUI name="search-field" placeholder="Search" disabled /> */}
				<Space />
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
