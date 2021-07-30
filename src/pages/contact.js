import * as React from "react";
import Img from "gatsby-image";
import Layout from "./../components/layouts/layout.js";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql } from "gatsby";

function Contact() {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      hero: file(name: { eq: "contact-right" }) {
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
        <title>The Restory Project | Contact</title>
      </Helmet>
      <div className="content-block flex flex-wrap-reverse content-center">
        <div className="flex-auto xl:flex-1 my-16">
          <h1>Contact us</h1>

          <div className="">
            <p>
              <a
                href="mailto: therestoryproject@protonmail.com"
                className="normal-anchor"
              >
                Email
              </a>{" "}
              or DM us on Instagram
            </p>
          </div>

          <div className="flex flex-wrap items-center">
            <p>Socials: </p>
            <a href="https://www.instagram.com/the_restory_project/">
              <StaticImage
                src="../images/socials/social-circle-instagram.png"
                alt="The Restory Project | instagram"
                className="normal-icons"
                placeholder="tracedSVG"
                layout="fixed"
                width={32}
                height={32}
              />
            </a>
            <a href="https://twitter.com/RestoryProject">
              <StaticImage
                src="../images/socials/social-circle-twitter.png"
                alt="The Restory Project | instagram"
                className="normal-icons"
                placeholder="tracedSVG"
                layout="fixed"
                width={32}
                height={32}
              />
            </a>
            <a href="https://www.facebook.com/restoryproject">
              <StaticImage
                src="../images/socials/social-circle-facebook.png"
                alt="The Restory Project | instagram"
                className="normal-icons"
                placeholder="tracedSVG"
                layout="fixed"
                width={32}
                height={32}
              />
            </a>
            <a href="https://www.linkedin.com/company/the-restory-project/">
              <StaticImage
                src="../images/socials/social-circle-linkedin.png"
                alt="The Restory Project | instagram"
                className="normal-icons"
                placeholder="tracedSVG"
                layout="fixed"
                width={32}
                height={32}
              />
            </a>
          </div>
        </div>

        <div className="image-parent flex-auto xl:flex-1 mt-16">
          <Img fluid={data.hero.childImageSharp.fluid} className="hero-image" />
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
