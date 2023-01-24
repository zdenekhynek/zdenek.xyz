import React from "react";

import Socials from "./socials";

const Footer = () => {
  return (
    <footer className="footer">
      {/* <StyledBorder className="noise" /> */}
      <div className="footerContainer">
        <div>
          <p>zdenek.hynek@gmail.com</p>
        </div>
        <div>
          <Socials />
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
