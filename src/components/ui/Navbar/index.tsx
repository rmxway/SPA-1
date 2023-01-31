import { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { InputUI } from '@/components/ui/Input';

import classes from './navbar.module.scss';
import { NavbarCart } from './NavbarCart';

const Navbar: FC = () => (
	<nav className={classes.navbar}>
		<div className="container">
			<div className={classes.wrapper}>
				<Link to="/" className={classes.logo}>
					GS
					<span>
						Green Shop <br />
						Brand
					</span>
				</Link>
				<InputUI name="search-field" placeholder="Search a product" className={classes.search} />
				<NavLink to="/">Main</NavLink>
				<NavLink to="/products">Products</NavLink>
				<NavLink to="/cart">
					<NavbarCart />
				</NavLink>
			</div>
		</div>
	</nav>
);

export { Navbar };
export default Navbar;
