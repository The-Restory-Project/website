import * as React from "react";
import Layout from "../components/layout-center";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

/*
const data = useStaticQuery(graphql`
  query helmetData {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`);

<title>{data.site.siteMetadata.title}</title>
<meta name="description" content={data.site.siteMetadata.description} />



*/

const Home = () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>The Restory Project | Home</title>
      <link rel="canonical" href="https://www.therestoryproject.in" />
    </Helmet>

    <div className="row">
      <div className="col-md">
        <h1>Changing the stories we tell about ourselves.</h1>
        <p>
          We’re young Indian, queer-affirmative, trauma-informed feminist
          therapists offering online therapy.
        </p>
      </div>
    </div>
  </Layout>
);

export default Home;
