import React from "react";
import styled from "styled-components";

import Socials from "./socials";

const Footer = () => {
  return (
    <StyledFooter>
      {/* <StyledBorder className="noise" /> */}
      <StyledContainer className="container">
        <div>
          <p>info@zdenek.xyz</p>
        </div>
        <div>
          <Socials />
        </div>
      </StyledContainer>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;

  /* compensate for border height */
  // margin-top: 20px;

  // padding: 40px 0 10px;
  // color: #4d75fa;
  // background-color: #000000;
`;

// const StyledBorder = styled.div`
//   position: absolute;
//   top: -20px;
//   display: block;
//   width: 100%;
//   height: 20px;
//   background-color: #4d75fa;

//   &:after {
//     display: block;
//     content: " ";
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     background: rgb(77, 117, 250);
//     background: linear-gradient(
//       90deg,
//       rgba(77, 117, 250, 1) 0%,
//       rgba(230, 131, 131, 1) 100%
//     );
//   }
// `;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;

  max-width: 1600px;
  width: 100%;
  padding: 0 96px;
  margin-bottom: 8px;
  
  @media only screen and (min-width: 768px) {
    text-align: left;
    flex-direction: row;
  }

  > div {
    &:first-child {
      display: flex;
      justify-content: center;
      flex-direction: column;
      color: #fff;
      fill: #fff;
    }

    &:last-child {
      padding: 0 20px; /* give social icons some space */
      color: #fff;
      fill: #fff;

      @media only screen and (min-width: 768px) {
        padding: 0;
      }
    }
  }
`;

Footer.propTypes = {};

export default Footer;
