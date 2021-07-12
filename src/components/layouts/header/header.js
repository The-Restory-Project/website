import * as React from "react";
import { Helmet } from "react-helmet";
import { Link } from "gatsby";
import { useState } from "react";
import { StaticImage } from "gatsby-plugin-image";

import "./header.scss";

const Header = ({ menuLinks, siteTitle }) => {
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

      <div className="header-set">
        <div className="logo-set">
          <Link to="/">
            <StaticImage
              className="logo"
              src="./../../../images/logo.png"
              alt="The Restory Project"
              placeholder="tracedSVG"
              layout="fixed"
              width={64}
              height={64}
            />
            <span className="logotype invisible md:visible">
              The Restory Project
            </span>
          </Link>
        </div>

        <div className="nav-set">
          <nav>
            <ul>
              <li>
                <Link to="/book" activeClassName="active">
                  Book a session
                </Link>
              </li>
              <li>
                <Link to="/shop" activeClassName="active">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" activeClassName="active">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="button-set">
          <div
            className={
              showMenu === true ? "menu-icon menu-icon-active" : "menu-icon"
            }
            onClick={() => setShowMenu(!showMenu)}
          >
            <span></span>
          </div>
          {menuMask}
          {menu}
        </div>
      </div>
    </header>
  );
};

export default Header;
