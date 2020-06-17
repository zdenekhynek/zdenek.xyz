import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProjectThumbImage = ({ thumbnail, title }) => {
  return <StyledProjectThumbImage src={thumbnail} alt={title} />;
};

const StyledProjectThumbImage = styled.img`
  position: relative;
  width: 100%;
  height: auto;

  &:before,
  &:after {
    display: block;
    content: 'a';
    position: absolute;
    top: 0;
    right: 0;
    border-color: transparent;
    border-style: solid;
  }

  &:before {
      border-width: 1.5em;
      border-right-color: #ccc;
      border-top-color: #ccc;
  }

  &:after {
      border-radius: 0.4em;
      border-width: 1.35em;
      border-right-color: #0c0;
      border-top-color: #0c0;
  }
`;

ProjectThumbImage.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};

export default ProjectThumbImage;
