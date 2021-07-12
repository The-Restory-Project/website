import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Cards from "./../components/card-post/cards.js";
import Layout from "./../components/layouts/layout.js";

const Blog = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>The Restory Project | Blog Posts</title>
      </Helmet>

      <div className="container">
        <div className="content-element__first">
          <h1>Blog Posts</h1>
          <Cards posts={data.allContentfulBlogPosts.edges} />
        </div>
      </div>
    </Layout>
  );
};

export default Blog;

export const blogQuery = graphql`
  query blogQuery {
    allContentfulBlogPosts(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "Do MMMM, YYYY")
          heroImage {
            fluid(maxWidth: 512, maxHeight: 512, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            description
          }
          author {
            name
          }
        }
      }
    }
  }
`;
