import React from "react";
import styled from "styled-components";

const ProjectThumbLink = ({ link = "", title = "", image = "", text = "" }) => {
  return (
    <StyledProjectLink href={link} title={title} target="_blank">
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
      <div>
        <img src={image} alt={title} />
      </div>
    </StyledProjectLink>
  );
};

const StyledProjectLink = styled.a`
  display: flex;
  flex-direction: column;
  padding: 20px;
  color: inherit;
  text-decoration: none;

  @media only screen and (min-width: 768px) {
    flex-direction: row-reverse;
    width: 100%;
    padding: 0;

    > div {
      flex-grow: 1;
      flex-shrink: 1;
      
      &:first-child {
        padding-left: 50px;
      }

      &:last-child {
        flex: 0 0 250px;
      }
    }
  }

  &:hover {
    img {
      box-shadow: 5px 5px 20px 1px rgba(77,117,250,1);
    }
  }

  h5 {
    font-family: "Oswald", sans-serif;
    font-size: 22px;
  }

  p {
    font-weight: 500;
    color: #4d75fa;
  }

  img {
    width: 100%;
    height: auto;

    @media only screen and (min-width: 768px) {
      width: 250px;
    }
  }
`;

export default ProjectThumbLink;
