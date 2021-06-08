import * as React from "react";
import Layout from "../components/layout-center";

const Contact = () => (
  <Layout>
    <div className="row">
      <div className="col-md">
        <h1>Contact us</h1>
        <p>
          Email <u>therestoryproject@protonmail.com</u> or DM us on Instagram
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-4">
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
      </div>
    </div>
  </Layout>
);

export default Contact;
