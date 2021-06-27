import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout-center";

const Contact = () => (
  <Layout>
    <Helmet>
      <title>The Restory Project | Contact</title>
    </Helmet>
    <div className="row">
      <div className="col-md">
        <h1>Contact us</h1>
        <p>
          <a
            href="mailto: therestoryproject@protonmail.com"
            className="secret-anchor"
          >
            Email
          </a>{" "}
          or DM us on Instagram
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
      <p>Socials:
        <a
          href="https://www.instagram.com/the_restory_project/"
          className="normal-anchor"
        >
          Instagram
        </a>
        <a href="https://twitter.com/RestoryProject" className="normal-anchor">
          Twitter
        </a>
        <a
          href="https://www.facebook.com/restoryproject"
          className="normal-anchor"
        >
          Facebook
        </a>
        <a
          href="https://www.linkedin.com/company/the-restory-project/"
          className="normal-anchor"
        >
          LinkedIn
        </a>
        </p>
      </div>
    </div>
  </Layout>
);

export default Contact;
