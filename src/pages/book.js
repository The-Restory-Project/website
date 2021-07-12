import * as React from "react";
import { Helmet } from "react-helmet";
import Layout from "./../components/layouts/layout.js";

const Book = () => (
  <Layout>
    <Helmet>
      <title>The Restory Project | Book a Session</title>
    </Helmet>

    <div classname="">
      <div className="content-block">
        <div className="md:w-1/2">
          <h1>Book a session</h1>
          <ol className="">
            <li>
              Read the therapist profiles, and pick a therapist you feel fits
              your requirements.
              <br />
              <br />
            </li>
            <li>
              Email or DM us on Instagram, with the name of the therapist you’d
              like an appointment with, preferred days and time for sessions,
              and preferred medium (text, phone call or video call). Please also
              mention whether you’re a student or working professional.
              <br />
              <br />
            </li>
            <li>
              The therapist you’ve selected will get back to you to set up an
              appointment.
              <br />
              <br />
            </li>
          </ol>
        </div>
      </div>

      <div className="content-block mb-12">
        <div className="flex gap-x-8">
          <div className="md:w-1/2">
            <h2>Sahiti Gavarikar</h2>
            <p>
              Sahiti has graduated with an M.Sc in Counselling Psychology, and
              also has a background in Journalism and Literature. She has worked
              with adolescents and adults, both online and offline, and on
              issues such as: depression, anxiety, trauma, addiction and
              interpersonal difficulties/relationship concerns.
              <br />
              <br />
              She is currently working in an academic setting as well as in
              private practice. She is passionate about helping women and
              LGBTQIA+ clients in finding a safe space and creating supportive
              networks. Her orientation is primarily cognitive behaviour
              therapy, but she is also heavily influenced by existential,
              humanistic and narrative therapy.
              <br />
              <br />
              She is a poet on the side, and is interested in exploring the use
              of poetry and other expressive arts in therapy.
            </p>
          </div>

          <div className="md:w-1/2">
            <h2>Anvitha Vidyasankar</h2>
            <p>
              Anvitha uses an eclectic approach with a feminist CBT bent. She
              also borrows from humanistic, behavioural and postmodern
              approaches. She specialises in grief, trauma, body image, anxiety,
              depression, personal growth and relationship/family/workplace
              concerns.
              <br />
              <br />
              Anvitha is interested in understanding the mind-body relationship
              and is currently training in EFT- Level 2. She has trained in
              expressive arts, mindfulness, ACT, CBT, trauma, TA, and has
              experience working with adolescents, young adults and adults, in
              school, work and private settings, using offline and online
              mediums. She regularly takes feedback from her clients and
              considers it a critical part of the therapeutic process.
              <br />
              <br />
              Anvitha has a Masters in Counseling Psychology and has also
              studied Psychology in her undergrad. She loves fantasy movies
              because they hold hope for her "even in the darkest of times".
            </p>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default Book;
