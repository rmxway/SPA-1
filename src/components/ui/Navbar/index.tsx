import Space from '@src/components/Space';
import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.scss';

const Navbar: React.FC = () => {
	return (
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
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
