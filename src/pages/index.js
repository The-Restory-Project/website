import * as React from "react";
import Img from "gatsby-image";
import Layout from "./../components/layouts/layout.js";
import Button from "./../components/button/button.js";
import { useStaticQuery, graphql } from "gatsby";

function Home() {
  const data = useStaticQuery(graphql`
    query HeroQuery {
      hero: file(name: { eq: "hero-right" }) {
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
      <div className="content-block flex flex-wrap-reverse space-x-4">
        <div className="flex-auto xl:flex-1 my-16">
          <h1>
            Changing the stories
            <br className="visible md:hidden" /> we tell about ourselves.
          </h1>
          <p>
            We are young Indian, queer-affirmative, trauma-informed feminist
            therapists offering online therapy.
          </p>
          <div className="pt-8">
            <Button link="/book" text="Find your therapist" />
          </div>
        </div>
        <div className="image-parent flex-auto xl:flex-1 mt-16">
          <Img fluid={data.hero.childImageSharp.fluid} className="hero-image" />
        </div>
      </div>
    </Layout>
  );
}

export default Home;
