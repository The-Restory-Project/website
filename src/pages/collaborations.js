import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "./../components/layouts/layout.js";

const Collaborations = () => (
  <Layout>
    <Helmet>
      <title>The Restory Project | Collaborations</title>
    </Helmet>

    <div className="content-block flex flex-wrap content-center">
      <div>
        <h1>Collaborations</h1>
        <blockquote>
          If you are a Corporate or an Organization, contact us to help you in
          creating a healthier work environment through - Workshops, Webinars,
          Support Groups, and Workplace Counselling.
        </blockquote>

        <div className="mb-4">
          <h2>Podcasts</h2>
          <p>
            <a
              href="https://open.spotify.com/episode/61nt2GCg8w7xUsuwuz6BcN?si=EkP5CLJ6Sc2lQspzEzPCuw"
              className="normal-anchor"
            >
              'Unlearning' while learning w/ The Restory Project
            </a>
          </p>
        </div>

        <div className="mb-4">
          <h2>Support Groups</h2>
          <p>LGBT+, Grief</p>
        </div>

        <div className="mb-4">
          <h2>Webinars and Workshops</h2>
          <ul>
            <li>Stress Management</li>
            <li>Mindfulness</li>
          </ul>
        </div>
      </div>
    </div>
  </Layout>
);

export default Collaborations;
