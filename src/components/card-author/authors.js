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
} from "./cards.module.scss";

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
        <p className={description}>{node.description.description}</p>
        <span className={author}>By {node.author.name}</span>
        <Link to={node.slug} className={button}>
          Read more
        </Link>
      </div>
    </div>
  );
};

const Cards = ({ posts }) => {
  return (
    <div className="">
      {posts.map((post) => (
        <CardComponent key={post.node.slug} node={post.node} />
      ))}
    </div>
  );
};

export default Cards;
