import * as React from "react";
import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import layoutStyle from "./layout-center.module.scss";

export default function Layout({ children }) {
  return (
    <div className={layoutStyle.container}>
      <Header />
      <div className={layoutStyle.section}>{children}</div>
      <Footer />
    </div>
  );
}
