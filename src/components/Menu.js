import React from "react";
import { Link } from "gatsby";

import "./menu.css";

const Menu = () => {
  return (
    <nav>
      <Link to="/">Home </Link>
      <Link to="/about">About </Link>
      <Link to="/work/reimagine-the-game">Reimagine the game </Link>
    </nav>
  );
};

export default Menu;
