import * as React from "react";
import Layout from "../components/layout-center";

const NotFoundPage = () => {
  return (
    <Layout>
      <div className="row">
        <div className="col-md">
          <h1>404: Page Not Found!</h1>
          <h2>Oopsies we couldn't find the page you were looking for uWu</h2>
          <p>Would you like to go back and try again?</p>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;
