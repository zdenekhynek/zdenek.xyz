import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Menu = () => {
  return (
    <StyledMenu>
      <StyledLi>
        <StyledLink to="/">Work</StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink to="/about">About</StyledLink>
      </StyledLi>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledLi = styled.li`
  list-style-type: none;
  padding: 0 20px;
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
`;

export default Menu;
