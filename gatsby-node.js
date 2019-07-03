/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

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
      context: { id: node.id },
    });
  });
};

const createBlogPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx (
        filter: { fileAbsolutePath: { regex: "/blog/" } }
        sort: { fields: [frontmatter___date], order: DESC }
      ) {
        edges {
          node {
            id
          }
        }
      }
    }
  `);

  const articles = result.data.allMdx.edges;
  const articlesPerPage = 10;
  const numPages = Math.ceil(articles.length / articlesPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: path.resolve(path.join('src', 'templates', 'BlogList.jsx')),
      context: {
        limit: articlesPerPage,
        skip: i * articlesPerPage,
        currentPage: i + 1,
        numPages,
      },
    });
  });
};

exports.createPages = async (ctx) => {
  await createGettingStartedPage(ctx);
  await createBlogPages(ctx);
};
