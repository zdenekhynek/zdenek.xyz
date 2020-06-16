import React from "react";
import PropTypes from "prop-types";

import Logo from "./Logo";
import Menu from "./Menu";

import "./layout.css";

const Layout = ({ children }) => {
  return (
    <div class="container">
      <header class="header">
        <Logo />
        <Menu />
      </header>
      {children}
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
