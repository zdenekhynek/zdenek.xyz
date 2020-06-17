import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ProjectThumbImage from "./project_thumb_image";

const ProjectThumb = ({
  title = "",
  summary = "",
  thumbnail = "",
  isOdd = false,
}) => {
  return (
    <StyledProject>
      <StyledProjectHeader>
        <StyledBorder className="noise" />
        <h3>{title}</h3>
      </StyledProjectHeader>
      <StyledProjectBody isOdd={isOdd}>
        <h4>{summary}</h4>
        <ProjectThumbImage thumbnail={thumbnail} alt={title} />
      </StyledProjectBody>
      <StyledProjectFooter />
    </StyledProject>
  );
};

const StyledProject = styled.div`
  position: relative;
  margin-bottom: 60px;
`;

const StyledProjectHeader = styled.div`
  padding: 0;

  h3 {
    position: relative;
    display: inline-block;
    margin: 0;
    padding: 0 20px;
    background-color: #f5f5f5;
    font-size: 18px;
    font-weight: 700;
  }
`;

const StyledBorder = styled.div`
  position: absolute;
  top: 0;
  display: block;
  width: 100%;
  height: 10px;
  background-color: #ffec00;
`;

const StyledProjectBody = styled.div`
  padding: 0;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: ${props => (props.isOdd ? "row-reverse" : "row")};
  }

  h4 {
    padding: 40px 20px;
    font-size: 24px;
  }
`;

const StyledProjectFooter = styled.div`
  padding: 0;
`;

ProjectThumb.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  thumbnail: PropTypes.string,
  isOdd: PropTypes.bool,
};

export default ProjectThumb;
