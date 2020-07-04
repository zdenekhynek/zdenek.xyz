import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Socials from "../components/socials";

const Skills = ({ skills }) => {
  return (
    <StyledSkills>
      <h3 className="box-title noise">Skills</h3>
      <StyledSkillsSection>
        {skills.map(group => {
          return (
            <div>
              <h4>{group.name}</h4>
              <p>{group.items.join(", ")}</p>
            </div>
          );
        })}
      </StyledSkillsSection>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  margin: 25px 0 75px;

  @media only screen and (min-width: 1200px) {
    margin-top: -80px;
  }
`;

const StyledSkillsSection = styled.div`
  h4 {
    text-transform: uppercase;
  }
`;

const Clients = ({ items }) => {
  return (
    <StyledClients>
      <h3 className="box-title noise">Clients</h3>
      <StyledClientsList>
        {items.map(client => {
          return (
            <li>
              <StyledClientImage src={`/clients/${client}.svg`} alt={client} />
            </li>
          );
        })}
      </StyledClientsList>
    </StyledClients>
  );
};

const StyledClients = styled.div`
  margin: 25px 0 75px;
`;

const StyledClientsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin: 20px 0;
  padding: 0;
  list-style-type: none;

  > li {
    flex: 0 0 50%;

    padding: 0 20px 10px 0;

    @media only screen and (min-width: 768px) {
      flex: 0 0 25%;
      padding: 0 60px 30px 0;
    }
  }
`;

const StyledClientImage = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  filter: grayscale(100%);
`;

const Template = ({ data }) => {
  const { markdownRemark } = data; // data.markdownRemark holds our post data
  const {
    html,
    frontmatter: { clients, skills },
  } = markdownRemark;

  return (
    <Layout>
      <div className="container">
        <StyledAboutBody>
          <div>
            <div dangerouslySetInnerHTML={{ __html: html }} />
            <Socials />
          </div>
          <div>
            <a
              href="http://www.poorlydrawnlines.com/comic/good-day/"
              title="Every day is a good day when you have a balloon."
              target="_blank"
            >
              <img src="/about.jpg" />
            </a>
          </div>
        </StyledAboutBody>
        <Skills skills={skills} />
        <Clients items={clients} />
      </div>
    </Layout>
  );
};

const StyledAboutBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  font-size: 24px;

  img {
    max-width: 100%;
    width: 350px;
    height: auto;
  }

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    div:first-child {
      max-width: 30em;
      padding-right: 60px;
    }
  }

  a {
    color: #e68383;
  }

  ul {
    @media only screen and (min-width: 768px) {
      width: 200px;
    }

    &:last-child {
      padding: 20px; /* give social icons some space */

      @media only screen and (min-width: 768px) {
        padding: 0;
      }
    }

    a {
      &:hover {
        svg {
          fill: #e68383;
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
        clients
        skills {
          name
          items
        }
      }
      id
      html
    }
  }
`;

export default Template;
