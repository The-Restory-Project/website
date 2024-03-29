import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "./../components/layouts/layout.js";

const Resources = () => (
  <Layout>
    <Helmet>
      <title>The Restory Project | Resources</title>
    </Helmet>
    <div className="content-element__first">
      <h1 className="pb-4">Resources</h1>
      <div className=" flex flex-wrap content-center">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
          <div className="">
            <h2>Suicide Helplines</h2>
            <ul>
              <li>1 Life: 7893078930</li>
              <li>Aasra: +91-9820466726</li>
              <li>I Call: 022-25521111</li>
              <li>Samaritans: (877) 870 4673</li>
              <li>Sahai: 080 25497777</li>
            </ul>
          </div>

          <div className="">
            <h2>LGBT+ Resources</h2>
            <ul>
              <li>Sahaay: 1800-2000-113</li>
              <li>Swabhava: 080-22230959</li>
              <li>Sahodari Foundation: +91 7639741916</li>
            </ul>
          </div>

          <div className="">
            <h2>Domestic Abuse Helplines</h2>
            <ul>
              <li>National Domestic Abuse Helpline: 1091/1291</li>
              <li>Shakti Shalini: 10920</li>
              <li>Sneha: 9833052684</li>
              <li>My Choices Foundation: 1800 212 9131</li>
              <li>Vimochana: 080-25492781 / 82 / 83</li>
              <li>Childline (for children): 1098</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Resources;
