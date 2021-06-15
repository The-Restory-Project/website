import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import { container, section } from "./layout-center.module.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNormalQuery {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  return (
    <div className={container}>
    <Header
      menuLinks={data.site.siteMetadata.menuLinks}
      siteTitle={data.site.siteMetadata?.title || `The story Project`}
    />
      <div className={section}>{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
