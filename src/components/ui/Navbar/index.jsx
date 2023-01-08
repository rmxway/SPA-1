import React from "react";
import { Link } from "react-router-dom";
import cl from "./navbar.module.scss";

const Navbar = () => {
  return (
    <div className={cl.navbar}>
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
