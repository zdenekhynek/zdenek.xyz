import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";

const IndexPage = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;

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
      <div
        className="project-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Layout>
  );
};

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/home" } }) {
      fields {
        slug
      }
      id
      html
    }
  }
`;

export default IndexPage;
