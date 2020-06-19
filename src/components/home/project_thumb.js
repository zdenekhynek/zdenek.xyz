import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import ProjectThumbImage from "./project_thumb_image";
import ProjectLink from "./project_thumb_link";

const ProjectThumb = ({
  title = "",
  summary = "",
  thumbnail = "",
  url = "",
  slug = "",
  stack = "",
  role = "",
  link = "",
  linkTitle = "",
  linkImage = "",
  linkText = "",
  isOdd = false,
}) => {
  return (
    <StyledProject>
      <StyledProjectLink href={url} target="_blank">
        <StyledProjectHeader isOdd={isOdd}>
          <StyledBorder className="noise" />
          <h3>{title}</h3>
        </StyledProjectHeader>
        <StyledProjectBody isOdd={isOdd}>
          <div>
            <h4>{summary}</h4>
            <StyledProjectSection>
              <h5 className="box-title noise">Stack</h5>
              <p>{stack}</p>
            </StyledProjectSection>
            <StyledProjectSection>
              <h5 className="box-title noise">Role</h5>
              <p>{role}</p>
            </StyledProjectSection>
          </div>
          <div>
            <ProjectThumbImage
              thumbnail={thumbnail}
              isOdd={isOdd}
            />
          </div>
        </StyledProjectBody>
      </StyledProjectLink>
      {link && (
        <ProjectLink
          link={link}
          title={linkTitle}
          image={linkImage}
          text={linkText}
        />
      )}
    </StyledProject>
  );
};

const StyledProject = styled.div`
  margin-bottom: 120px;
`;

const StyledProjectLink = styled.a`
  display: block;
  position: relative;
  color: inherit;
  text-decoration: none;

  &:hover {
    img {
      box-shadow: 5px 5px 20px 1px rgba(77, 117, 250, 1);
    }
  }
`;

const StyledProjectHeader = styled.div`
  margin-bottom: -13px;
  padding: 0;

  h3 {
    position: relative;
    top: -7px;
    display: inline-block;
    margin: 0;
    padding: 0 20px;
    background-color: #f5f5f5;
    font-size: 18px;
    font-weight: 700;

    /* mobile styling */
    left: 50%;
    transform: translate(-50%, 0);

    @media only screen and (min-width: 768px) {
      left: ${props => (props.isOdd ? "55%" : "10%")};
      transform: translate(0, 0); /* reset mobile */
    }
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
  margin-bottom: 50px;
  padding: 0;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: ${props => (props.isOdd ? "row-reverse" : "row")};
  }

  > div {
    flex-basis: 100%;

    @media only screen and (min-width: 768px) {
      &:first-child {
        flex-basis: 45%;
      }
      &:last-child {
        flex-basis: 55%;
      }
    }
  }

  h4 {
    margin-bottom: 0px;
    padding: 20px 20px 40px;
    font-size: 24px;
  }

  h5 {
    margin: 0;
  }
`;

const StyledProjectSection = styled.div`
  margin-bottom: 30px;
  padding: 0 20px;
  /* padding-bottom: 0px; */
`;

ProjectThumb.propTypes = {
  title: PropTypes.string,
  summary: PropTypes.string,
  thumbnail: PropTypes.string,
  url: PropTypes.string,
  stack: PropTypes.string,
  role: PropTypes.string,
  linkTitle: PropTypes.string,
  linkImage: PropTypes.string,
  linkText: PropTypes.string,
  slug: PropTypes.string,
  isOdd: PropTypes.bool,
};

export default ProjectThumb;
