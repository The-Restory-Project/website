import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Authors from "./../components/card-author/authors.js";
import Layout from "./../components/layouts/layout.js";

const Book = ({ data }) => (
  <Layout>
    <Helmet>
      <title>The Restory Project | Book a Session</title>
    </Helmet>

    <div classname="container">
      <div className="content-element__first md:w-1/2">
        <h1>Book a session</h1>
        <ol className="">
          <li>
            Read the therapist profiles, and pick a therapist you feel fits your
            requirements.
            <br />
            <br />
          </li>
          <li>
            Email or DM us on Instagram, with the name of the therapist you’d
            like an appointment with, preferred days and time for sessions, and
            preferred medium (text, phone call or video call). Please also
            mention whether you’re a student or working professional.
            <br />
            <br />
          </li>
          <li>
            The therapist you’ve selected will get back to you to set up an
            appointment.
            <br />
            <br />
          </li>
        </ol>
      </div>

      <div className="content-element__last">
        <Authors posts={data.allContentfulProfile.edges} />
      </div>
    </div>
  </Layout>
);

export default Book;

export const therapistQuery = graphql`
  query therapistQuery {
    allContentfulProfile(sort: { fields: id, order: ASC }) {
      edges {
        node {
          name
          description {
            description
          }
          profilePicture {
            fluid(maxWidth: 512, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
