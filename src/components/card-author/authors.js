import * as React from "react";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import Img from "gatsby-image";
import {
  card,
  imageContainer,
  image,
  contentContainer,
  title,
  about,
  email,
} from "./authors.module.scss";

const CardComponent = ({ node }) => {
  return (
    <div className={card}>
      <div className={imageContainer}>
        <Img
          className={image}
          fluid={node.profilePicture.fluid}
          alt="Author's profile picture"
        />
      </div>
      <div className={contentContainer}>
        <h4 className={title}>{node.name}</h4>
        <div>
          <main className={about}>{renderRichText(node.description)}</main>
        </div>
        <p className={email}>Email me: {renderRichText(node.sendEmail)}</p>
      </div>
    </div>
  );
};

const Cards = ({ posts }) => {
  return (
    <div className="grid md:grid-cols-2 gap-x-6 gap-y-8 mt-6 mb-12">
      {posts.map((post) => (
        <CardComponent key={post.node.id} node={post.node} />
      ))}
    </div>
  );
};

export default Cards;
