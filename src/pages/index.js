import React from "react";
import { Link } from "gatsby";

import Layout from "../components/Layout";
import ProjectThumb from "../components/home/project_thumb";
import HomeHeader from "../components/home/home_header";

const IndexPage = ({ data }) => {
  const { markdownRemark, allMarkdownRemark } = data; // data.markdownRemark holds our post data
  const { html } = markdownRemark;

  return (
    <Layout>
      <HomeHeader content={html}/>
      <div className="container">
        {allMarkdownRemark.edges.map(({ node }, i) => {
          const { frontmatter } = node;
          const isOdd = i % 2 === 0;

          return (
            <li key={i}>
              <ProjectThumb isOdd={isOdd} {...frontmatter} />
            </li>
          );
        })}
      </div>

      <p>Developing data-driven interfaces and digital products.</p>
      <p>info@zdenek.xyz</p>
      <p>
        <a
          href="./zdenek-hynek-resume-2020.pdf"
          title="Zdenek Hynek Resume 2020.pdf"
        >
          Download CV
        </a>
      </p>
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
