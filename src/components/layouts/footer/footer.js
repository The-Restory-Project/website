import * as React from "react";
import "./footer.scss";

const today = new Date();

const Footer = () => (
  <footer>
    <div className="inner-footer">
      <p>
        Copyright{" "}
        <a href="https://aerocreate.in/" className="normal-anchor">
          Aero Create
        </a>{" "}
        © {today.getFullYear()}.
      </p>
    </div>
  </footer>
);

export default Footer;
