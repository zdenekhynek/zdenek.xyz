import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div class="container">
      <div>
        Menu
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
        <Link to="/work/reimagine-the-game">Reimagine the game </Link>
      </div>
      {children}
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
