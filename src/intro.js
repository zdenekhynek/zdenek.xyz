import React from "react";

import Section from "./section";
import Contact from "./contact";
import {
  selectedWorks,
  experiences,
  speaking,
  writing,
  reading,
  awards,
} from "./content";
import { isAndroidAgent } from "./App";

const Intro = () => {
  const isAndroid = isAndroidAgent();

  return (
    <div class="body">
      {/* <button class="dark_mode_toggle">d</button> */}
      {isAndroid && <div className="staticBackground" />}
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
        <Section title="Awards" items={awards} />
      </div>
      <div className="section__wrapper">
        <Section title="Speaking" items={speaking} />
      </div>
      <div className="section__wrapper">
        <Section title="Writing" items={writing} />
      </div>
      <div className="section__wrapper">
        <Section title="Reading" items={reading} />
      </div>
      <div className="section__wrapper">
        <Contact />
      </div>
    </div>
  );
};

Intro.propTypes = {};

export default Intro;
