import * as React from "react";
import { Helmet } from "react-helmet";
import { graphql } from "gatsby";
import Products from "./../components/card-product/products.js";
import Layout from "./../components/layouts/layout.js";

const Shop = ({ data }) => (
  <Layout>
    <Helmet>
      <title>The Restory Project | Shop</title>
    </Helmet>

    <div className="content-block flex flex-wrap content-center">
      <div className="container">
        <h1>
          Just hold on,
          <br />
          We're coming soon!
        </h1>
        {/*<Products posts={data.allContentfulProduct.edges} />*/}
      </div>
    </div>
  </Layout>
);

export default Shop;

export const productQuery = graphql`
  query shopQuery {
    allContentfulProduct(sort: { fields: id, order: DESC }) {
      edges {
        node {
          id
          name
          description {
            description
          }
          slug
          heroImage {
            fluid(maxWidth: 512, maxHeight: 512, resizingBehavior: FILL) {
              ...GatsbyContentfulFluid
            }
          }
          price
        }
      }
    }
  }
`;
