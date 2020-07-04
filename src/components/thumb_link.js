import React from "react";
import styled from "styled-components";

const ThumbLink = ({
  link = "",
  title = "",
  image = "",
  text = "",
  theme = "blue",
  isFeatured = false,
}) => {
  return (
    <StyledProjectLink
      href={link}
      title={title}
      target="_blank"
      isFeatured={isFeatured}
    >
      <div>
        <h5>{title}</h5>
        <p>{text}</p>
      </div>
      <StyledImageWrapper>
        <StyledProjectThumbBorder
          className="noise"
          theme={theme}
          isFeatured={isFeatured}
        />
        <img src={image} alt={title} />
      </StyledImageWrapper>
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
      position: relative;
      flex-grow: 1;
      flex-shrink: 1;

      &:first-child {
        padding-left: 50px;
      }

      &:last-child {
        flex: 0 0 200px;
      }
    }
  }

  &:hover {
    img {
      box-shadow: 5px 5px 20px 1px rgba(77, 117, 250, 1);
    }
  }

  h5 {
    margin-top: 0;
    font-family: "Oswald", sans-serif;
    font-size: 22px;
  }

  p {
    font-weight: 500;
    color: #4d75fa;
  }

  img {
    width: 100%;
    max-width: ${props => (props.isFeatured ? "350px" : "150px")};
    height: auto;

    @media only screen and (min-width: 768px) {
      max-width: ${props => (props.isFeatured ? "350px" : "200px")};
    }
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
`;

const StyledProjectThumbBorder = styled.div`
  position: absolute;
  top: 0;
  display: block;
  max-width: ${props => (props.isFeatured ? "350px" : "150px")};
  width: 100%;
  height: 10px;

  background-color: ${props =>
    props.theme === "red" ? "rgb(77, 117, 250)" : "rgb(77, 117, 250)"};
  background: ${props =>
    props.theme === "red"
      ? "linear-gradient( 90deg,rgba(77,117,250,1) 0%,rgba(230,131,131,1) 100% )"
      : "linear-gradient(315deg,rgba(77, 117, 250, 1) 0%,rgba(236, 243, 224, 1) 100%)"};

  @media only screen and (min-width: 768px) {
    max-width: ${props => (props.isFeatured ? "350px" : "200px")};
  }
`;

export default ThumbLink;
