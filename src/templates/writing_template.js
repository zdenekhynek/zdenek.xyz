import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import ThumbLink from "../components/thumb_link";

const renderLink = (link, i, theme) => {
  return (
    <StyledListItem key={i} isFeatured={link.isFeatured}>
      <ThumbLink theme={theme} {...link} />
    </StyledListItem>
  );
};

const Template = ({ data }) => {
  const { markdownRemark } = data;
  const {
    frontmatter: { speaking, writing },
  } = markdownRemark;

  return (
    <Layout>
      <div className="container">
        <StyledSection>
          <StyledHeader>Speaking</StyledHeader>
          <StyledList>{speaking.map((link, i) => renderLink(link, i, "red"))}</StyledList>
        </StyledSection>
        <StyledSection>
          <StyledHeader>Writing</StyledHeader>
          <StyledList>{writing.map((link, i) => renderLink(link, i, "blue"))}</StyledList>
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

const StyledHeader = styled.h3`
  font-size: 34px;
  font-weight: 500;
  color: #4d75fa;
`;

const StyledList = styled.ul`
  padding: 0;
  list-style-type: none;

  h5 {
    margin-bottom: 20px;
  }
`;

const StyledListItem = styled.li`
  margin-bottom: 10px;
  
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
          flex: ${props => (props.isFeatured ? "0 0 350px": "0 0 125px")};
        }
      }
    }
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
          isFeatured
        }
        writing {
          title
          link
          image
          isFeatured
        }
      }
      id
    }
  }
`;

export default Template;
