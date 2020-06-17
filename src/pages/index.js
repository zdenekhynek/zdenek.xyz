import React from "react";
import styled from "styled-components";

import Layout from "../components/layout";
import ProjectThumb from "../components/home/project_thumb";
import HomeHeader from "../components/home/home_header";

const IndexPage = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;

  return (
    <Layout>
      <HomeHeader content={html} />
      <div className="container">
        {allMarkdownRemark.edges.map(({ node }, i) => {
          const { frontmatter } = node;
          const isOdd = i % 2 === 0;

          return (
            <StyledProjectItem key={i}>
              <ProjectThumb isOdd={isOdd} {...frontmatter} />
            </StyledProjectItem>
          );
        })}
      </div>
    </Layout>
  );
};

const StyledProjectItem = styled.li`
  list-style-type: none;
`;

export const query = graphql`
  query {
    markdownRemark(fields: { slug: { eq: "/home" } }) {
      fields {
        slug
      }
      id
      html
    }
    allMarkdownRemark(
      sort: { order: ASC, fields: [frontmatter___order] }
      filter: { fileAbsolutePath: { regex: "/(work)/" } }
      limit: 1000
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            summary
            thumbnail
          }
        }
      }
    }
  }
`;

export default IndexPage;
