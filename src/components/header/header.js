import * as React from "react";
import Img from "gatsby-image";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import "./header.scss";

const Header = ({ menuLinks, siteTitle }) => {
  const data = useStaticQuery(graphql`
    query LogoQuery {
      file(name: { eq: "logo" }) {
        childImageSharp {
          fixed(height: 86, width: 86) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);

  const [showMenu, setShowMenu] = useState(false);

  let menu;
  let menuMask;

  if (showMenu) {
    menu = (
      <div className="menu-outer">
        <nav className="menu-inner">
          <ul>
            {menuLinks.map((link) => (
              <li key={link.name}>
                <Link to={link.link}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    );

    menuMask = (
      <div className="menu-mask" onClick={() => setShowMenu(false)}>
        <span></span>
      </div>
    );
  }

  return (
    <header>
      <Helmet
        title={siteTitle}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      ></Helmet>
      <div className="container-fluid inner-header">
        <div className="logo">
          <Link to="/">
            <Img fixed={data.file.childImageSharp.fixed} alt="Logo" />
            <span>The Restory Project</span>
          </Link>
        </div>

        <div className={ showMenu === true ? "menu-top move-shit" : "menu-top" }>
          <nav>
            <ul>
              <li>
                <Link to="/book" activeClassName="active">Book a session</Link>
              </li>
              <li>
                <Link to="/shop" activeClassName="active">Shop</Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="menu-button">
          <nav>
            <div
              className={ showMenu === true ? "menu-icon menu-icon-active move-shit" : "menu-icon" }
              onClick={() => setShowMenu(!showMenu)}
            >
              <span></span>
            </div>
            {menuMask}
            {menu}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
