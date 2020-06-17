import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo className="noise">
      <StyledLink to="/">
        <span>zdenek.</span>
        <span>x</span>
        <span>y</span>
        <span>z</span>
      </StyledLink>
    </StyledLogo>
  );
};

const StyledLogo = styled.h1`
  margin: 0;
  padding: 10px 12px;
  font-size: 30px;
  font-weight: 100;
  background-color: #4d75fa;
  
  @media only screen and (min-width: 768px) {
    padding: 20px 25px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 180px;
  color: #fcf3de;
  text-decoration: none;

  > span {
    flex-basis: 25%;

    span:nth-child(2n) {
      text-align: right;
    }

    &:first-child {
      flex-basis: 75%;
      font-weight: 400;
    }
  }
`

export default Logo;
