import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "../components/layout";

const Collaborations = () => (
  <Layout>
  <Helmet>
    <title>The Restory Project | Collaborations</title>
  </Helmet>
    <div className="container-fluid">
      <h1>Collaborations</h1>

      <div className="row padding-vertical">
        <div className="col-sm">
          <h2>Podcasts</h2>
          <a
            href="https://open.spotify.com/episode/61nt2GCg8w7xUsuwuz6BcN?si=EkP5CLJ6Sc2lQspzEzPCuw"
            className="secret-anchor"
          >
            'Unlearning' while learning w/ The Restory Project
          </a>
        </div>
      </div>

      <div className="row padding-vertical">
        <div className="col-sm">
          <h2>Support Groups</h2>
          <p>LGBT+, Grief</p>
        </div>
      </div>

      <div className="row padding-vertical">
        <div className="col-sm">
          <h2>Webinars and Workshops</h2>
          <ul>
            <li>Stress Management Workshops</li>
            <li>Mindfullness Workshop</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default Collaborations;
