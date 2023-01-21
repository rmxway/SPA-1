import { FC } from 'react';
import { Link } from 'react-router-dom';

import { CartWrapper } from '@/components/CartWrapper';
import { Space } from '@/components/Space';

import classes from './navbar.module.scss';

const Navbar: FC = () => (
	<nav className={classes.navbar}>
		<div className="container">
			<div className={classes.wrapper}>
				<Link to="/" className={classes.logo}>
					lOl
				</Link>
				<Space />
				<Link to="/">Main</Link>
				<Link to="/products">Products</Link>
				<Link to="/about">About</Link>
				<CartWrapper />
			</div>
		</div>
	</nav>
);

export { Navbar };
export default Navbar;
