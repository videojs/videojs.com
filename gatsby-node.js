/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path')

const createGettingStartedPage = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx (filter: { fileAbsolutePath: { regex: "/getting-started.md/" } }) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: '/getting-started',
      component: path.resolve(path.join('src', 'templates', 'GettingStarted', 'index.jsx')),
      context: { id: node.id }
    })
  });
}

exports.createPages = async (ctx) => {
  await createGettingStartedPage(ctx);
};
