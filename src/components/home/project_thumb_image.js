import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProjectThumbImage = ({ thumbnail, title, isOdd }) => {
  return (
    <StyledProjectThumbImage>
      <img src={thumbnail} alt={title} />
      <StyledCorner className="noise" isOdd={isOdd} />
    </StyledProjectThumbImage>
  );
};

const StyledProjectThumbImage = styled.div`
  position: relative;

  img {
    position: relative;
    width: 100%;
    height: auto;
  }
`;

const StyledCorner = styled.span`
  display: block;
  position: absolute;
  bottom: 4px;
  right: ${props => (props.isOdd? "0": "auto")};
  border-color: transparent;
  border-style: solid;
  border-width: 15px;
  border-right-color: ${props => (props.isOdd? "#ffec00" : "transparent")};
  border-left-color: ${props => (props.isOdd? "transparent": "#ffec00")};
  border-bottom-color: #ffec00;
`;

ProjectThumbImage.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  isOdd: PropTypes.bool,
};

export default ProjectThumbImage;
