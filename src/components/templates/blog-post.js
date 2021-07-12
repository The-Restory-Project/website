import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import Layout from "./../layouts/layout.js";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { image, date, content } from "./blog-posts.module.scss";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPosts(slug: { eq: $slug }) {
      title
      author {
        name
      }
      publishDate(formatString: "Do MMMM, YYYY")
      heroImage {
        fluid(maxWidth: 1920, maxHeight: 720) {
          ...GatsbyContentfulFluid
        }
      }
      body {
        raw
      }
    }
  }
`;

const BlogPost = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>The Restory Blog | {props.data.contentfulBlogPosts.title}</title>
      </Helmet>
      <div className="content-block">
        <div>
          <h1>{props.data.contentfulBlogPosts.title}</h1>
          <span className={date}>
            Posted on {props.data.contentfulBlogPosts.publishDate} by{" "}
            {props.data.contentfulBlogPosts.author.name}
          </span>
          <div classname="">
            <div className="">
              <Img
                fluid={props.data.contentfulBlogPosts.heroImage.fluid}
                className={image}
              />
            </div>
            <div className="">
              <div className={content}>
                {renderRichText(props.data.contentfulBlogPosts.body)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
