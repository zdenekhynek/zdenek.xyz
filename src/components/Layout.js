import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Logo from "./Logo";
import Menu from "./Menu";

import "./global.css";

const Layout = ({ children }) => {
  return (
    <div>
      <StyledHeader>
        <Logo />
        <Menu />
      </StyledHeader>
      {children}
    </div>
  );
};

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
