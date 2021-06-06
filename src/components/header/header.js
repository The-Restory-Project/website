import * as React from "react";
import { Link } from "gatsby";
import "./header.scss";

const Header = () => (
  <header>
    <div className="inner-header">
      <div className="logo">
        <Link to="/">The Restory Project</Link>
      </div>
      <div className="navigation">
        <nav>
          <Link to="/book">Book a session</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
