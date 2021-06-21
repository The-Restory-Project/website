import * as React from "react";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { useStaticQuery, graphql } from "gatsby";
import "./header.scss";

const Header = ({ menuLinks, siteTitle }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(id: { eq: "3cd2bc99-5201-5dec-a4f1-39d185c66271" }) {
        childImageSharp {
          fixed(height: 86, width: 86) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  return (
    <header>
      <Helmet
        title={siteTitle}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      ></Helmet>
      <div className="inner-header">
        <div className="logo">
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="Logo" />
          </Link>
        </div>
        <div className="navigation">
          <nav>
            <ul>
              {menuLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.link}>{link.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
