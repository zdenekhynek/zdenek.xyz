import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ProjectThumbImage = ({ thumbnail = "", title = "", isOdd = false }) => {
  // const gifThumbnail = `${thumbnail.split(".")[1]}.gif`;
  const isVideo = thumbnail.indexOf(".mp4") > -1;

  return (
    <StyledProjectThumbImage>
      {isVideo ? (
        <video src={thumbnail} autoPlay muted loop playsinline />
      ): (
        <img src={thumbnail} alt={title} />
      )}
      

      {/* <StyledImageWrapper>
        <StyledStaticImage src={thumbnail} alt={title} />
        <StyledStaticGif src={gifThumbnail} alt={title} />
      </StyledImageWrapper> */}
      <StyledCorner className="noise" isOdd={isOdd} />
    </StyledProjectThumbImage>
  );
};

const StyledProjectThumbImage = styled.div`
  position: relative;
  height: 0;
  padding-top: 67.6%;

  img,
  video {
    position: absolute;
    top: 0;
    width: 100%;
    height: auto;
  }
`;

const StyledImageWrapper = styled.div`
  position: relative;
  padding-top: 67.5%;
  height: 0;
`;

const StyledImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
`;

const StyledStaticImage = styled(StyledImage)``;
const StyledStaticGif = styled(StyledImage)``;

const StyledCorner = styled.span`
  display: block;
  position: absolute;
  bottom: 0;
  right: ${props => (props.isOdd ? "0" : "auto")};
  border-color: transparent;
  border-style: solid;
  border-width: 15px;
  border-right-color: ${props => (props.isOdd ? "#ffec00" : "transparent")};
  border-left-color: ${props => (props.isOdd ? "transparent" : "#ffec00")};
  border-bottom-color: #ffec00;
`;

ProjectThumbImage.propTypes = {
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  isOdd: PropTypes.bool,
};

export default ProjectThumbImage;
