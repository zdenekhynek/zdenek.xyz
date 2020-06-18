import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const Logo = () => {
  return (
    <StyledLogo>
      <StyleBackground className="noise" />
      <StyledLink to="/">
        <StyledGraphic>
          <span>zdenek.</span>
          <span>x</span>
          <span>y</span>
          <span>z</span>
        </StyledGraphic>
      </StyledLink>
    </StyledLogo>
  );
};

const StyledLogo = styled.h1`
  margin: 0;
  padding: 10px 12px;
  font-size: 30px;
  font-weight: 100;
`;

const StyleBackground = styled.span`
  position: absolute;
  top: 0;
  left: -1000px;
  right: -5%;
  height: 100px;
  background-color: #4d75fa;

  @media only screen and (min-width: 768px) {
    right: calc(100% - 180px);
  }
`;

const StyledLink = styled(Link)`
  position: relative;
  color: #fcf3de;
  text-decoration: none;
`;

const StyledGraphic = styled.span`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 180px;
  
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
`;

export default Logo;
