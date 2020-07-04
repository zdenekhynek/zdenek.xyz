import React from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet"

import Layout from "../components/layout";
import ProjectThumb from "../components/home/project_thumb";
import HomeHeader from "../components/home/home_header";

const IndexPage = ({ data }) => {
  const { markdownRemark, allMarkdownRemark, site } = data;
  const { html } = markdownRemark;

  return (
    <Layout>
      <Helmet>
        <title>{site.siteMetadata.title}</title>
        <meta name="description" content={site.siteMetadata.description}/>
        <meta property="og:title" content={site.siteMetadata.title} />
        <meta name="og:description" content={site.siteMetadata.description}/>
        <meta property="og:image" content="https://zdenek.xyz/about.jpg" />
        <meta property="og:url" content="https://zdenek.xyz"></meta>
      </Helmet>
      <HomeHeader content={html} />
      <div className="container">
        {allMarkdownRemark.edges.map(({ node }, i) => {
          const { frontmatter, fields: { slug } } = node;
          const isOdd = i % 2 === 0;

          return (
            <StyledProjectItem key={i}>
              <ProjectThumb isOdd={isOdd} slug={slug} {...frontmatter} />
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
    site {
      siteMetadata {
        title
        description
      }
    }
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
            stack
            role
            url
            link {
              link
              title
              text
              image
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
