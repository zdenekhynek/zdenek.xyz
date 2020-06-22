import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import Socials from "../components/socials";

export const SKILLS = [
  {
    name: "Frontend",
    skills: [
      "Javascript ES6/7",
      "Typescript",
      "React",
      "Redux",
      "d3.js",
      "SVG",
      "canvas",
      "WebGL",
      "Mocha",
      "Chai",
      "Webpack",
    ],
  },
  {
    name: "Backend",
    skills: [
      "Python",
      "Django",
      "Node.js",
      "Express",
      "Mysql",
      "Postgres",
      "MongoDB",
      "AWS",
      "Heroku",
    ],
  },
  {
    name: "Data science",
    skills: ["Tensorflow.js", "ml5.js", "Pandas", "Numpy", "Scipy"],
  },
];

const Skills = ({ skills }) => {
  return (
    <StyledSkills>
      <h3 className="box-title noise">Skills</h3>
      <StyledSkillsSection>
        {skills.map(group => {
          return (
            <div>
              <h4>{group.name}</h4>
              <p>{group.skills.join(", ")}</p>
            </div>
          );
        })}
      </StyledSkillsSection>
    </StyledSkills>
  );
};

const StyledSkills = styled.div`
  margin: 25px 0 75px;
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
    frontmatter: { clients },
  } = markdownRemark;

  return (
    <Layout>
      <div className="container">
        <StyledAboutBody>
          <div dangerouslySetInnerHTML={{ __html: html }} />
          <Socials />
        </StyledAboutBody>
        <Skills skills={SKILLS} />
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

  @media only screen and (min-width: 768px) {
    flex-direction: row;

    p {
      padding-right: 80px;
    }
  }

  a {
    color: #e68383;
  }

  ul:last-child {
    padding: 20px; /* give social icons some space */

    @media only screen and (min-width: 768px) {
      padding: 0;
    }
  }

  /* override socials hover icon */
  ul a {
    &:hover {
      svg {
        fill: #e68383;
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
      }
      id
      html
    }
  }
`;

export default Template;
