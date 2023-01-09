import React from 'react';
import { Link } from 'react-router-dom';
import classes from './navbar.module.scss';

const Navbar: React.FC = () => {
	return (
		<div className={classes.navbar}>
			<div className="container">
				<Link to="/">Main</Link>
				<Link to="/posts">Posts</Link>
				<Link to="/about">About</Link>
				<Link to="/contacts">Contacts</Link>
			</div>
		</div>
	);
};

export default Navbar;
