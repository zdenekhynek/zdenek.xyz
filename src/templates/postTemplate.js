import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const Template = ({
  data, // this prop will be injected by the GraphQL query below.
}) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const { frontmatter, html, id } = markdownRemark;

  return (
    <Layout>
      <div className="blog-post-container">
        <div className="blog-post">
          {frontmatter.showTitle && <h1 align="center">{frontmatter.title}</h1>}
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </Layout>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        sidebar
        showTitle
        hideAnchor
      }
    }
  }
`;

export default Template;