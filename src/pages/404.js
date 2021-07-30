import * as React from "react";
import Img from "gatsby-image";
import Layout from "../components/layouts/layout.js";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

function NotFoundPage() {
  const data = useStaticQuery(graphql`
    query notfoundQuery {
      notfound: file(name: { eq: "404image" }) {
        childImageSharp {
          fluid(maxWidth: 512, maxHeight: 512) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `);

  return (
    <Layout>
      <Helmet>
        <title>The Restory Project | Page Not Found</title>
      </Helmet>

      <div className="content-block flex flex-wrap-reverse space-x-4">
        <div className="flex-auto md:flex-1 my-16">
          <h1>404: Page Not Found!</h1>
          <h2>Oops! We couldn't find the page you were looking for.</h2>
          <p>Would you like to go back and try again?</p>
        </div>
        <div className="flex-auto md:flex-1">
          <Img
            fluid={data.notfound.childImageSharp.fluid}
            className="hero-image"
          />
        </div>
      </div>
    </Layout>
  );
}

export default NotFoundPage;
