import * as React from "react";
import { Helmet } from "react-helmet";

import { Link } from "gatsby";
import "./header.scss";

const Header = ({ menuLinks, siteTitle }) => (
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
        <Link to="/">The Restory Project</Link>
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

export default Header;

/*
export default Header;

<ul>
  {menuLinks.map((link) => (
    <li key={link.name}>
      <Link to={link / link}>{link.name}</Link>
    </li>
  ))}
</ul>;


<Link to="/book">Book a session</Link>
<Link to="/shop">Shop</Link>
<Link to="/contact">Contact</Link>


*/
