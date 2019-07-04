/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`);

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
            fields {
              slug
            }
          }
        }
      }
    }
  `);

  const articles = result.data.allMdx.edges;

  articles.forEach((article) => {
    console.log('a', article);
    createPage({
      path: article.node.fields.slug,
      component: path.resolve(path.join('src', 'templates', 'BlogArticle.jsx')),
      context: { id: article.node.id },
    });
  });

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


exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'Mdx') {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: 'slug',
      node,
      value
    });
  }
};
