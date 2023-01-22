import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import CurlNoise from "../curl_noise/app";
// import FluidAnim from "../fluid_anim/fluid_anim";

const HomeHeader = ({ content = "" }) => {
  return (
    <StyledHeader>
      <StyledAnim>
        <iframe
          src="./background/index.html"
          style={{ width: "100%", height: "100%", border: 0 }}
        />
        {/* <CurlNoise /> */}
        {/* <FluidAnim /> */}
        {/* <StyledIframe src="http://localhost:3000/" /> */}
      </StyledAnim>
      <StyledContainer className="container">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </StyledContainer>
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: relative;

  /* pull under the header */
  margin-top: -78px;
  padding-top: 78px;

  /* compensate for pushed down resume */
  // margin-bottom: 180px;

  // background-color: rgb(77, 117, 250);
  // background: linear-gradient(
  //   315deg,
  //   rgba(77, 117, 250, 1) 0%,
  //   rgba(236, 243, 224, 1) 100%
  // );

  // @media only screen and (min-width: 768px) {
  //   margin-top: -114px;
  //   padding-top: 114px;

  //   /* compensate for pushed down resume */
  //   margin-bottom: 130px;
  // }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
`;

const StyledAnim = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 1600px;
  // padding: 128px 96px;
  padding: 256px 96px;

  h2 {
    max-width: 900px;
    margin-top: 0;
    margin-bottom: 0;
    font-family: Inter, sans-serif;
    font-size: 64px;
    line-height: 1.15;
    font-weight: 600;
    letter-spacing: -0.04em;
    color: #fff;
    filter: drop-shadow(1px 0px 10px black);

    /* mobile styling */
    // font-size: 44px;
    // padding: 20px;

    @media only screen and (min-width: 768px) {
      font-size: 54px;
    }
  }

  pointer-events: none;
`;

const StyledIframe = styled.iframe`
  width: 100%;
  height: 100%;
  border: 0;
`;

HomeHeader.propTypes = {
  tagline: PropTypes.string,
};

export default HomeHeader;
