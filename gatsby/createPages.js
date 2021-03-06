const path = require("path");
const replacePath = require("./utils");

module.exports = exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  //  compile paths to all the templates
  const projectTemplate = path.resolve(`src/templates/project_template.js`);
  const writingTemplate = path.resolve(`src/templates/writing_template.js`);
  const aboutTemplate = path.resolve(`src/templates/about_template.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [] }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      const { slug } = node.fields;

      //  we don't need to create a dynamic page for home
      //  since that's automatically used in src/pages/index.js
      if (slug === "/home") {
        return;
      }

      //  depending on the slug, choose the most appropriate 
      //  template
      let template = projectTemplate;
      if (slug === "/about") {
        template = aboutTemplate;
      } else if (slug === "/writing") {
        template = writingTemplate;
      }

      createPage({
        path: replacePath(node.fields.slug),
        component: template,
        context: {}, // additional data can be passed via context
      });
    });
  });
};
