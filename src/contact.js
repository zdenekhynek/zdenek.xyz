import React from "react";

import TwitterIconImg from "./images/twitter.inline.svg";
import GithubIconImg from "./images/github.inline.svg";
import MediumIconImg from "./images/medium.inline.svg";

const TwitterIcon = <TwitterIconImg style={{ paddingTop: "1px" }} />;
const GithubIcon = <GithubIconImg />;
const MediumIcon = <MediumIconImg style={{ paddingTop: "1px" }} />;

const SocialIcon = ({ title, url, icon }) => {
  return (
    <a className="icon" href={url} target="_blank" title={title}>
      <span className="hidden">{title}</span>
      <span style={{ display: "block", backgroundUrl: icon }} />
    </a>
  );
};

export default function Contact({ title = "Title", items = [] }) {
  return (
    <div className="section section--contact">
      {/* <h2 className="h2">Contact</h2> */}
      <ul className="section__list">
        <li>
          <a href="mailto:zdenek.hynek@gmail.com">Email</a>
        </li>
        <li>
          <a
            className="icon"
            href="https://github.com/zdenekhynek"
            target="_blank"
            title="Github"
          >
            Github
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="https://twitter.com/zdenekhynek"
            target="_blank"
            title="Twitter"
          >
            Twitter
          </a>
        </li>
        <li>
          <a
            className="icon"
            href="https://linkedin.com/in/zdenekhynek"
            target="_blank"
            title="LinkedIn"
          >
            LinkedIn
          </a>
        </li>
      </ul>
      <ul className="section__list">
        <li>
          <a target="_blank" href="./zdenek-hynek-cv-2023.pdf">
            CV (PDF)
          </a>
        </li>
        <li>
          <a target="_blank" href="./zdenek-hynek-2023-portfolio.pdf">
            Portfolio (PDF)
          </a>
        </li>
      </ul>
      {/* <ul className="section__list">
        {items &&
          items.map((item, index) => (
            <li key={index}>
              <a
                className="section__item"
                href={item.recordingLink}
                target="_blank"
              >
                <span className="section__item__date">{item.date}</span>
                <span className="section__item__title">{item.title}</span>
                {item.description && (
                  <span className="section__item__description">
                    - {item.description}
                  </span>
                )}
              </a>
            </li>
          ))}
      </ul> */}
    </div>
  );
}
