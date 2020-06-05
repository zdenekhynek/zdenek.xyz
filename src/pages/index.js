import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const IndexPage = () => {
  return (
    <Layout>
      <h1 class="title">
        <span>zdenek.</span>
        <span>x</span>
        <span>y</span>
        <span>z</span>
      </h1>
      <p>Developing data-driven interfaces and digital products.</p>
      <p>info@zdenek.xyz</p>
      <p><a href="./zdenek-hynek-resume-2020.pdf" title="Zdenek Hynek Resume 2020.pdf">Download CV</a></p>
    </Layout>
  );
};

export default IndexPage;
