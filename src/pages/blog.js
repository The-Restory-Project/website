import * as React from "react";
import Cards from "./../components/cards/cards.js";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Blog = ({ data }) => {
  return (
    <Layout>
      <Helmet>
        <title>The Restory Project | Blog Posts</title>
      </Helmet>
      <div className="container-fluid">
        <h1>Blog Posts</h1>
        <Cards posts={data.allContentfulBlogPost.edges} />
      </div>
    </Layout>
  );
};

export default Blog;

export const blogQuery = graphql`
  query blogQuery {
    allContentfulBlogPost(sort: { fields: publishDate, order: DESC }) {
      edges {
        node {
          title
          id
          slug
          publishDate(formatString: "Do MMMM, YYYY")
          heroImage {
            fluid(maxWidth: 512, maxHeight: 512, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
          description {
            childMarkdownRemark {
              excerpt(pruneLength: 120)
            }
          }
          author {
            name
          }
        }
      }
    }
  }
`;
