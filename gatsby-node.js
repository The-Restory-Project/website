const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const response = await graphql(`
    query {
      allContentfulBlogPosts {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);
  response.data.allContentfulBlogPosts.edges.forEach((edge) => {
    createPage({
      path: `/blog/${edge.node.slug}`,
      component: path.resolve("./src/components/templates/blog-post.js"),
      context: {
        slug: edge.node.slug,
      },
    });
  });
};
