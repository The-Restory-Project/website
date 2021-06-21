import * as React from "react";
import Products from "./../components/products/products.js";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../components/layout";

const Shop = ({ data }) => (
  <Layout>
    <Helmet>
      <title>The Restory Project | Shop</title>
    </Helmet>
    <div className="container-fluid">
      <h1>Shop our products</h1>
      <Products posts={data.allContentfulProduct.edges} />
    </div>
  </Layout>
);

export default Shop;

export const productQuery = graphql`
  query MyQuery {
    allContentfulProduct(sort: { fields: contentful_id, order: ASC }) {
      edges {
        node {
          id
          name
          description {
            description
          }
          image {
            fluid(resizingBehavior: FILL, maxWidth: 512, maxHeight: 512) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;
