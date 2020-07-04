import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const activeClassName = "active";

const Menu = () => {
  return (
    <StyledMenu>
      <StyledLi>
        <StyledLink activeClassName={activeClassName} to="/">
          Work
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink activeClassName={activeClassName} to="/writing">
          Writing/speaking
        </StyledLink>
      </StyledLi>
      <StyledLi>
        <StyledLink activeClassName={activeClassName} to="/about/">
          About
        </StyledLink>
      </StyledLi>
    </StyledMenu>
  );
};

const StyledMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0;
  font-family: 'Raleway', sans-serif;
  font-size: 14px;
`;

const StyledLi = styled.li`
  list-style-type: none;
  padding: 20px 0;

  @media only screen and (min-width: 768px) {
    padding: 20px 0 20px 20px;
  }
`;

const StyledLink = styled(Link).attrs({
  activeClassName: activeClassName,
})`
  color: inherit;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.2s color;

  &:hover,
  &.${activeClassName} {
    color: #4d75fa;
  }
`;

export default Menu;
