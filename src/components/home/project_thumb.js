import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProjectThumb = ({
  title = "",
  summary = "",
  thumbnail = "",
  isOdd = false,
}) => {
  return (
    <StyledProject isOdd={isOdd}>
      <h2>{title}</h2>
      <p>{summary}</p>
      {thumbnail && <img src={thumbnail} alt={title} />}
    </StyledProject>
  );
};

const StyledProject = styled.div`
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: ${props => (props.isOdd ? "row-reverse" : "row")};
  }

  > img {
    width: 200px;
    height: auto;
  }
`;

ProjectThumb.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  thumbnail: PropTypes.string,
  isOdd: PropTypes.bool,
};

export default ProjectThumb;
