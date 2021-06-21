import * as React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Img from "gatsby-image";
import Layout from "./../components/layout.js";

import {
  image,
  textbox,
  date,
  heading,
  content,
} from "./blog-posts.module.scss";

export const query = graphql`
  query ($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
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
        childMarkdownRemark {
          html
        }
      }
    }
  }
`;

const BlogPost = (props) => {
  return (
    <Layout>
      <Helmet>
        <title>The Restory Blog | {props.data.contentfulBlogPost.title}</title>
      </Helmet>
      <div className="container-fluid">
        <h1>{props.data.contentfulBlogPost.title}</h1>
        <span className={date}>
          Posted on {props.data.contentfulBlogPost.publishDate} by{" "}
          {props.data.contentfulBlogPost.author.name}
        </span>
        <div classname="row padding-vertical">
          <div className="col-sm">
            {props.data.contentfulBlogPost.heroImage && (
              <Img
                fluid={props.data.contentfulBlogPost.heroImage.fluid}
                alt={props.data.contentfulBlogPost.title}
                className={image}
              />
            )}
          </div>
          <div className="row padding-vertical">
            <div className={content}>
              <div
                dangerouslySetInnerHTML={{
                  __html:
                    props.data.contentfulBlogPost.body.childMarkdownRemark.html,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BlogPost;
