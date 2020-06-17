import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Resume from "./resume";

const HomeHeader = ({ content = "" }) => {
  return (
    <StyledHeader>
      <StyledBackground className="noise" />
      <StyledContainer className="container">
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <StyledResume>
          <Resume />
        </StyledResume>
      </StyledContainer>
      <StyledBorder className="noise" />
    </StyledHeader>
  );
};

const StyledHeader = styled.div`
  position: relative;

  /* compensate for pushed down resume */
  margin-bottom: 180px;
  
  background-color: rgb(77, 117, 250);
  background: linear-gradient(
    315deg,
    rgba(77, 117, 250, 1) 0%,
    rgba(236, 243, 224, 1) 100%
  );

  @media only screen and (min-width: 768px) {
    /* pull under the header */
    margin-top: -114px;
    padding-top: 114px;

    /* compensate for pushed down resume */
    margin-bottom: 130px;
  }
`;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  h2 {
    max-width: 50rem;
    margin-top: 115px;
    color: #4d75fa;
    font-weight: 500;

    /* mobile styling */
    font-size: 44px;
    padding: 20px;

    @media only screen and (min-width: 768px) {
      font-size: 54px;
    }
  }
`;

const StyledBackground = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const StyledBorder = styled.div`
  position: absolute;
  bottom: -14px;
  display: block;
  width: 100%;
  height: 14px;
  background-color: #4d75fa;

  @media only screen and (min-width: 768px) {
    width: 50%;
  }
`

const StyledResume = styled.div`
  position: relative;
  z-index: 1;
  align-self: flex-end;
  margin-top: -140px;
  transform: translate(0, 140px);
`;

HomeHeader.propTypes = {
  tagline: PropTypes.string,
};

export default HomeHeader;
