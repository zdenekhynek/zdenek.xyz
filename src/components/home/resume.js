import React from "react";
import styled from "styled-components";

const Resume = () => {
  return (
    <StyledResume
      href="./zdenek-hynek-resume-2020.pdf"
      title="Zdenek Hynek Resume 2020.pdf"
      className="noise"
    >
      See my<br />resume
    </StyledResume>
  );
};

const StyledResume = styled.a`
  display: block;
  width: 150px;
  min-height: 175px;
  padding: 12px;
  font-family: "Oswald", sans-serif;
  font-weight: 600;
  font-size: 22px;
  background-color: #ffec00;
  color: #4d75fa;
  text-transform: uppercase;
  text-decoration: none;
  transition: .2s color, .2s background-color;
  border: 8px solid #ffec00;

  &:hover {
    color: #ffec00;
    background-color: #4d75fa;
  }
`;

export default Resume;
