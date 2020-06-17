import React from "react";
import styled from "styled-components";

import Logo from "./logo";
import Menu from "./menu";

const Header = () => {
  return (
    <StyledHeader className="container">
      <Logo />
      <Menu />
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: relative;
  z-index: 1;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export default Header;
