import React from "react";
import styled from "styled-components";

import TwitterIconImg from "../images/twitter.inline.svg";
import GithubIconImg from "../images/github.inline.svg";
import MediumIconImg from "../images/medium.inline.svg";

const TwitterIcon = <TwitterIconImg style={{ paddingTop: "1px" }} />;
const GithubIcon = <GithubIconImg />;
const MediumIcon = <MediumIconImg style={{ paddingTop: "1px" }} />;

const SocialIcon = ({ title, url, icon }) => {
  return (
    <StyledIcon href={url} target="_blank" title={title}>
      <span className="hidden">{title}</span>
      <span>{icon}</span>
    </StyledIcon>
  );
};

const StyledIcon = styled.a`
  display: block;
  height: 35px;

  svg {
    width: 35px;
    height: 35px;
    transition: 0.2s fill;
    fill: inherit;
  }

  &:hover {
    svg {
      fill: white;
    }
  }
`;

const Socials = () => {
  return (
    <StyledSocials>
      <li>
        <SocialIcon
          url="https://twitter.com/zdenekhynek"
          title="Twitter"
          icon={TwitterIcon}
        />
      </li>
      <li>
        <SocialIcon
          url="https://github.com/zdenekhynek"
          title="Github"
          icon={GithubIcon}
        />
      </li>
      <li>
        <SocialIcon
          url="https://medium.com/@zdenekhynek"
          title="Medium"
          icon={MediumIcon}
        />
      </li>
    </StyledSocials>
  );
};

const StyledSocials = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }

  > li {
    margin: 0 15px;

    &:last-child {
      margin-right: 0;
    }
  }
`;

export default Socials;
