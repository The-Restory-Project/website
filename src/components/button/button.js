import * as React from "react";
import { button } from "./button.module.scss";
import { Link } from "gatsby";

const Button = ({ link, text }) => {
  return (
    <Link to={link} className={button}>
      {text}
    </Link>
  );
};

export default Button;
