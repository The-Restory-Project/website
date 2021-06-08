import * as React from "react";
import Layout from "../components/layout";

const About = () => (
  <Layout>
    <div className="container-fluid">
      <div className="row padding-vertical">
        <div className="col-sm-6">
          <h1>About us</h1>
          <p>
            We want to make therapy accessible and affordable in India, by using
            video, chat and telephone mediums. We offer sessions on a sliding
            scale for clients in need. We believe the personal is political and
            aim to provide a safe space to our clients by acknowledging existing
            power structures, and helping them feel empowered despite them.
            We’re queer-affirmative, feminist, trauma-informed, and caste/class
            aware. We aim to examine and change personal narratives to benefit
            our clients.
          </p>
        </div>
      </div>

      <div className="row padding-vertical">
        <div className="col-sm-6">
          <h1>Why therapy</h1>
          <p>
            Therapy provides a space where an individual can be listened to
            without judgement, and with empathy. Your therapist is an objective
            third-party who can help provide insight. Therapy allows in holding
            space for your feelings, exploring your concerns and processing
            them, developing healthier coping mechanisms and strategies to
            manage concerns or even be just a space that supports your growth,
            depending on the goals you mutually set with your therapist.
            <br />
            <br />
            You do not have to have a mental illness to seek therapy. If you
            have concerns that you want an objective opinion on, need a space to
            vent, want to work on relationship or communication issues, or just
            want clarity in areas of your life, you can approach a therapist.
          </p>
        </div>
      </div>

      <div className="row padding-vertical">
        <div className="col-sm-6">
          <h1>How The Restory Project started</h1>
          <p>
            Anvitha Vidyasankar and Sahiti Gavarikar met in college, while they
            were pursuing their Master’s in Counselling Psychology. They
            realized that their individual approaches to therapy had a major
            underlying belief in common - that while a therapist is supposed to
            be objective, they cannot remain neutral on matters of social
            justice. They envisioned a socio-politically informed approach to
            therapy, especially with an emphasis on intersectional feminist and
            queer-affirmative therapy.
            <br />
            <br />
            They were inspired by narrative therapy, especially by the idea that
            the stories we tell shape our realities, and these stories are
            influenced by socio-political structures and power dynamics. They
            found themselves driven by the idea of helping individuals step away
            from the dominant narrative, of helping them reclaim their stories.
            <br />
            <br />
            The two believe that a therapist's ethical obligation must also
            involve a dedicated effort to understand and support marginalized
            communities. From their experiences during training, Anvitha and
            Sahiti noticed that marginalized people were especially hesitant to
            approach mental health professionals, because they had experienced
            discrimination in similar spaces that were meant to be safe. Making
            therapy a safe space for marginalized groups thus became an
            important goal in their journey as therapists. They also recognised
            the need for accessibility and affordability, and thus decided to
            offer sessions online, and on a sliding scale for those in need.
          </p>
        </div>
      </div>
    </div>
  </Layout>
);

export default About;
