import * as React from "react";
import Img from "gatsby-image";
import {
  card,
  imageContainer,
  image,
  contentContainer,
  title,
  description,
  author,
} from "./cards.module.scss";
import Button from "../button/button.js";

const CardComponent = ({ node }) => {
  return (
    <div className={card}>
      <div className={imageContainer}>
        <Img
          className={image}
          fluid={node.heroImage.fluid}
          alt="Blog post reference image"
        />
      </div>
      <div className={contentContainer}>
        <h4 className={title}>{node.title}</h4>
        <span className={author}>By {node.author.name}</span>
        <p className={description}>{node.description.description}</p>
        <Button link={node.slug} text="Read more" />
      </div>
    </div>
  );
};

const Cards = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 mt-6 mb-12">
      {posts.map((post) => (
        <CardComponent key={post.node.slug} node={post.node} />
      ))}
    </div>
  );
};

export default Cards;
