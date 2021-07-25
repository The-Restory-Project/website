import * as React from "react";
import Layout from "./../components/layouts/layout.js";
import Button from "./../components/button/button.js";

const Home = () => (
  <Layout>
    <div className="content-block">
      <div>
        <h1>Changing the stories we tell about ourselves.</h1>
        <p className="md:w-1/2">
          We are young Indian, queer-affirmative, trauma-informed feminist
          therapists offering online therapy.
        </p>
        <div className="pt-8">
          <Button link="/book" text="Find your therapist" />
        </div>
      </div>
    </div>
  </Layout>
);

export default Home;
