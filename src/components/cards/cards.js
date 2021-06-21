import * as React from "react";
import { Link } from "gatsby";
import Img from "gatsby-image";
import {
  card,
  image,
  texth4,
  textp,
  textspan,
  link,
} from "./cards.module.scss";

const CardComponent = ({ node }) => {
  return (
    <div className={card}>
      <Img
        className={image}
        fluid={node.heroImage.fluid}
        alt="placeholder for the blog posts"
      />
      <Link to={node.slug} className={link}>
        <h4 className={texth4}>{node.title}</h4>
      </Link>
      <p className={textp}>{node.description.childMarkdownRemark.excerpt}</p>
      <span className={textspan}>{node.author.name}</span>
    </div>
  );
};

const Cards = ({ posts }) => {
  return (
    <div className="row">
      {posts.map((post) => (
        <CardComponent key={post.node.slug} node={post.node} />
      ))}
    </div>
  );
};

export default Cards;
