/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');
const _ = require('lodash');
const { createFilePath } = require('gatsby-source-filesystem');

const createGettingStartedPage = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allMdx (filter: { fileAbsolutePath: { regex: "/getting-started.md/" } }) {
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

  result.data.allMdx.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(path.join('src', 'templates', 'GettingStartedTemplate.jsx')),
      context: { id: node.id },
    });
  });
};

const getBlogPagePath = (pageNum) => {
  const blogPath = '/blog';
  return pageNum ? `${blogPath}/${pageNum}` : blogPath;
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
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `);

  const posts = result.data.allMdx.edges;

  posts.forEach(({ node }, i) => {
    const prevPost = (i > 0) ? posts[i - 1].node : null;
    const nextPost = (i < (posts.length - 1)) ? posts[i + 1].node : null;

    createPage({
      path: node.fields.slug,
      component: path.resolve(path.join('src', 'templates', 'BlogPostTemplate.jsx')),
      context: {
        id: node.id,
        prevPost: prevPost && prevPost.fields.slug,
        nextPost: nextPost && nextPost.fields.slug,
      },
    });
  });

  const postsPerPage = 10;
  const numPages = Math.ceil(posts.length / postsPerPage);

  for (let i = 1; i <= numPages; i++) {
    createPage({
      path: i === 1 ? getBlogPagePath() : getBlogPagePath(i),
      component: path.resolve(path.join('src', 'templates', 'BlogListTemplate.jsx')),
      context: {
        limit: postsPerPage,
        skip: (i - 1) * postsPerPage,
        currentPage: i,
        prevPage: (i > 1) ? getBlogPagePath(i - 1) : null,
        nextPage: (i < numPages) ? getBlogPagePath(i + 1) : null,
        numPages,
      },
    });
  }

  const tags = _.uniq(posts.reduce((acc, post) => ([
    ...acc,
    ...(post.node.frontmatter.tags || []),
  ]), []));

  tags.forEach((tag) => {
    createPage({
      path: `/tags/${tag}`,
      component: path.resolve(path.join('src', 'templates', 'BlogTagTemplate.jsx')),
      context: { tag },
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
