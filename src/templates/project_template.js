import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

const Template = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, id } = markdownRemark;

  return (
    <Layout>
      <div className="project-container">
        <div className="project">
          {frontmatter.stack && (<p>{frontmatter.stack}</p>)}
          {frontmatter.role && (<p>{frontmatter.role}</p>)}
          <div
            className="project-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        stack
        role
      }
    }
  }
`;

export default Template;
