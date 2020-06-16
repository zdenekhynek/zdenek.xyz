import React from "react";
import { Link } from "gatsby";

import "./logo.css";

const Logo = () => {
  return (
    <h1 class="logo">
      <Link class="logo__link" to="/home">
        <span>zdenek.</span>
        <span>x</span>
        <span>y</span>
        <span>z</span>
      </Link>
    </h1>
  );
};

export default Logo;
