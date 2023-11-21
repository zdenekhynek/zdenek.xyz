import React from "react";

import Section from "./section";
import Contact from "./contact";
import { selectedWorks, experiences, speaking, writing } from "./content";

const Intro = () => {
  return (
    <div class="body">
      {/* <button class="dark_mode_toggle">d</button> */}
      <div class="intro">
        <h1 class="h1">
          I’m Zdenek — a full-stack developer of data-driven systems and
          interfaces
        </h1>
      </div>
      <div className="section__wrapper">
        <Section title="Selected work" items={selectedWorks} />
      </div>
      <div className="section__wrapper">
        <Section title="Experience" items={experiences} />
      </div>
      <div className="section__wrapper">
        <Section title="Speaking" items={speaking} />
      </div>
      <div className="section__wrapper">
        <Section title="Writing" items={writing} />
      </div>
      <div className="section__wrapper">
        <Contact />
      </div>
    </div>
  );
};

Intro.propTypes = {};

export default Intro;
