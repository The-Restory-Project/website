import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "./../components/layouts/layout.js";

const Contact = () => {
  return (
    <Layout>
      <Helmet>
        <title>The Restory Project | Contact</title>
      </Helmet>
      <div className="content-block flex flex-wrap content-center">
        <div>
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
              <img
                className="normal-icons"
                src="https://img.icons8.com/material-rounded/48/000000/instagram-new.png"
              />
            </a>
            <a href="https://twitter.com/RestoryProject">
              <img
                className="normal-icons"
                src="https://img.icons8.com/material-rounded/48/000000/twitter.png"
              />
            </a>
            <a href="https://www.facebook.com/restoryproject">
              <img
                className="normal-icons"
                src="https://img.icons8.com/material-rounded/48/000000/facebook.png"
              />
            </a>
            <a href="https://www.linkedin.com/company/the-restory-project/">
              <img
                className="normal-icons"
                src="https://img.icons8.com/material-rounded/48/000000/linkedin--v1.png"
              />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
