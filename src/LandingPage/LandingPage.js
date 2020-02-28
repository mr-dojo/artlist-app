import React from "react";
import "./LandingPage.css";

function LandingPage(props) {
  return (
    <>
      <header role="banner">
        <h1>Artlist</h1>
        <h2>Helping artists organize</h2>
      </header>

      <section className="landing-page-section">
        <h2>The current state of Artlist</h2>
        <p className="landing-page-paragraph">
          In its current state, the application is "static" meaning that the
          functionality isn't built yet. This is a proof of concept and will be
          used to get feedback on the idea and layout of the app.
        </p>
      </section>

      <section className="landing-page-section">
        <h3>Why did I create Artlist?</h3>
        <p className="landing-page-paragraph">
          As an artist, I know that it's very hard to keep my invintory in
          order. Knowing what pieces are available and where they are located
          can mean the difference in a sale. I've always wanted a place where I
          could organize and keep track of my work.
        </p>
      </section>

      <section className="landing-page-section">
        <h3>What does it do for you?</h3>
        <p className="landing-page-paragraph">
          Artlist helps you make customized, printable pdf lists of your
          artwork. It shows you, at-a-glance, what you have and all available
          information on each piece.
        </p>
      </section>

      <section className="landing-page-section">
        <h3>How does it do it?</h3>
        <p className="landing-page-paragraph">
          Create entries with as many details as you can. Then use the "view"
          page to filter and create lists
        </p>
      </section>

      <section className="landing-page-section">
        <h3>Upcoming Features</h3>
        <ul className="landing-page-features-list">
          <li>
            <p>- Create and export printable pdf's</p>
          </li>
          <li>
            <p>- Add images to art entries</p>
          </li>
          <li>
            <p>- Create an account so your list is only visible by you</p>
          </li>
          <li>
            <p>- Save filter configurations to easily access specific lists</p>
          </li>
        </ul>
      </section>

      <section>
        <h3>After you are finished looking around..</h3>
        <p>Please take 5 min to fill out this survey </p>
        <a href="https://forms.gle/tvykpNnGvvqngxXT6">-Link to survey-</a>
      </section>
    </>
  );
}

export default LandingPage;
