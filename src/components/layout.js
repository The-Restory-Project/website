import * as React from "react";
import Header from "./header/header.js";
import Footer from "./footer/footer.js";

import { container, section } from "./layout-center.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Header />
      <div className={section}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
