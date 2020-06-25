import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import ThumbLink from "../components/thumb_link";

const renderLink = (link, i) => {
  return (
    <li key={i}>
      <ThumbLink {...link} />
    </li>
  );
};

const Template = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const {
    frontmatter: { speaking, writing },
  } = markdownRemark;

  return (
    <Layout>
      <div className="container">
        <StyledSection>
          <h3 className="box-title noise">Speaking</h3>
          <StyledList>{speaking.map(renderLink)}</StyledList>
        </StyledSection>
        <StyledSection>
          <h3 className="box-title noise">Writing</h3>
          <StyledList>{writing.map(renderLink)}</StyledList>
        </StyledSection>
      </div>
    </Layout>
  );
};

const StyledSection = styled.div`
  margin-top: 40px;

  &:last-child {
    margin-bottom: 80px;
  }
`;

const StyledList = styled.ul`
  padding: 0;
  list-style-type: none;

  li {
    margin-bottom: 10px;
  }

  a {
    padding: 20px 0;
  }

  @media only screen and (min-width: 768px) {
    a {
      padding: 0;
      
      > div {
        &:first-child {
          padding-left: 25px;
        }
        &:last-child {
          flex: 0 0 125px;
        }
      }
    }

    img {
      max-width: 125px;
    }
  }

  h5 {
    margin-bottom: 20px;
  }
`;

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(fields: { slug: { eq: $path } }) {
      fields {
        slug
      }
      frontmatter {
        speaking {
          title
          meta
          text
          link
          image
        }
        writing {
          title
          link
          image
        }
      }
      id
    }
  }
`;

export default Template;
