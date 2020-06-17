import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProjectThumbImage = ({ thumbnail, title }) => {
  return <StyledProjectThumbImage src={thumbnail} alt={title} />;
};

const StyledProjectThumbImage = styled.img`
  width: 50%;
  height: auto;
`;

ProjectThumbImage.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
};

export default ProjectThumbImage;
