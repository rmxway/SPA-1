import { FC } from 'react';
import { Link } from 'react-router-dom';

import { Space } from '@/components/Space';

import classes from './navbar.module.scss';
import { NavbarCart } from './NavbarCart';

const Navbar: FC = () => (
	<nav className={classes.navbar}>
		<div className="container">
			<div className={classes.wrapper}>
				<Link to="/" className={classes.logo}>
					GS
                    <span>Green Shop <br />Brand</span>
				</Link>
				<Space />
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
