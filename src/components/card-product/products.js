import * as React from "react";
import Img from "gatsby-image";
import {
  card,
  imageContainer,
  image,
  textContainer,
  name,
  description,
  buy,
} from "./products.module.scss";

const CardComponent = ({ node }) => {
  return (
    <div className={card}>
      <div className={imageContainer}>
        <Img
          className={image}
          fluid={node.heroImage.fluid}
          alt="placeholder for the products"
        />
      </div>
      <div className={textContainer}>
        <h4 className={name}>{node.name}</h4>
        <p className={description}>{node.description.description}</p>
        <button type="button" className={buy}>
          Buy now
        </button>
      </div>
    </div>
  );
};

const Products = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-6 mb-12">
      {posts.map((post) => (
        <CardComponent key={post.node.id} node={post.node} />
      ))}
    </div>
  );
};

export default Products;
