import * as React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import {
  card,
  imageContainer,
  image,
  contentContainer,
  title,
  description,
  author,
  button,
} from "./authors.module.scss";

const CardComponent = ({ node }) => {
  return (
    <div className={card}>
      <div className={imageContainer}>
        <Img
          className={image}
          fluid={node.profilePicture.fluid}
          alt="Blog post reference image"
        />
      </div>
      <div className={contentContainer}>
        <h4 className={title}>{node.name}</h4>
        <p className={description}>{node.description.description}</p>
      </div>
    </div>
  );
};

const Cards = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-6 gap-y-8 mt-6 mb-12">
      {posts.map((post) => (
        <CardComponent key={post.node.slug} node={post.node} />
      ))}
    </div>
  );
};

export default Cards;
