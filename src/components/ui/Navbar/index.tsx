import { FC } from 'react';
import { Link } from 'react-router-dom';

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
				<Link to="/">Main</Link>
				<Link to="/products">Products</Link>
				<Link to="/cart">
					<NavbarCart />
				</Link>
			</div>
		</div>
	</nav>
);

export { Navbar };
export default Navbar;
