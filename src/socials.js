import React from "react";

import TwitterIconImg from "./images/twitter.inline.svg";
import GithubIconImg from "./images/github.inline.svg";
import MediumIconImg from "./images/medium.inline.svg";

const TwitterIcon = <TwitterIconImg style={{ paddingTop: "1px" }} />;
const GithubIcon = <GithubIconImg />;
const MediumIcon = <MediumIconImg style={{ paddingTop: "1px" }} />;

const SocialIcon = ({ title, url, icon }) => {
  console.log("icon", icon);

  return (
    <a className="icon" href={url} target="_blank" title={title}>
      <span className="hidden">{title}</span>
      <span style={{ display: "block", backgroundUrl: icon }} />
    </a>
  );
};

const Socials = () => {
  return (
    <div className="socials">
      <li>
        <SocialIcon
          url="https://twitter.com/zdenekhynek"
          title="Twitter"
          icon={TwitterIconImg}
        />
      </li>
      <li>
        <SocialIcon
          url="https://github.com/zdenekhynek"
          title="Github"
          icon={GithubIconImg}
        />
      </li>
      <li>
        <SocialIcon
          url="https://medium.com/@zdenekhynek"
          title="Medium"
          icon={MediumIconImg}
        />
      </li>
    </div>
  );
};

export default Socials;
