import * as React from "react";
import Img from "gatsby-image";
import { card, image, texth4, textp, button } from "./products.module.scss";

const CardComponent = ({ node }) => {
  return (
    <div className={card}>
      <Img
        className={image}
        fluid={node.image.fluid}
        alt="placeholder for the blog posts"
      />
      <h4 className={texth4}>{node.name}</h4>
      <p className={textp}>{node.description.description}</p>
      <button type="button" className={button}>
        Buy now
      </button>
    </div>
  );
};

const Products = ({ posts }) => {
  return (
    <div className="row">
      {posts.map((post) => (
        <CardComponent key={post.node.id} node={post.node} />
      ))}
    </div>
  );
};

export default Products;
