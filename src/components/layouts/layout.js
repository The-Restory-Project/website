import * as React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./header/header.js";
import Footer from "./footer/footer.js";
import { container, section, backgroundImage } from "./layout.module.scss";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteNormalQuery {
      title: site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
      vector: file(name: { eq: "background" }) {
        publicURL
      }
    }
  `);

  return (
    <div className={container}>
      <Header
        menuLinks={data.title.siteMetadata.menuLinks}
        siteTitle={
          data.title.siteMetadata?.title ||
          `The Restory Project | Changing the stories we tell about ourselves`
        }
      />
      <main className={section}>{children}</main>
      {/*      <img src={data.vector.publicURL} className={backgroundImage} />
       */}
      <Footer />
    </div>
  );
};

export default Layout;
