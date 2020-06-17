import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Project = ({ title = "", summary = "", thumbnail = "" }) => {
  return (
    <div key={title}>
      <h2>{title}</h2>
      <p>{summary}</p>
      {thumbnail && <img src={thumbnail} alt={title} />}
    </div>
  );
};

const StyledProject = styled.div`
  > img {
    width: 200px;
    height: auto;
  }
`;

Project.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  thumbnail: PropTypes.string,
};

export default Project;