import React from "react";
import "./LandingPage.css";

function LandingPage(props) {
  return (
    <>
      <header role="banner">
        <h1 className="landing-page-header">Helping Artists Organize</h1>
      </header>

      <section className="landing-page-section landing-page-why">
        <h2 className="backlit-text">Why did I create Artlist?</h2>
        <p className="landing-page-paragraph">
          "As an artist, I live in a constant state of organized chaos. I
          created Artlist to help myself, and artists like me, keep track of
          their artwork."
        </p>
      </section>

      <section className="landing-page-section landing-page-how">
        <h2 className="backlit-text">Get started with Artlist</h2>
        <p className="landing-page-paragraph">
          It's <strong className="landing-page-strong">super</strong> simple
        </p>
        <ul>
          <li>
            <p className="landing-page-paragraph">
              1. Add artwork entries with as many details as you can
            </p>
          </li>
          <li>
            <p className="landing-page-paragraph">2. View your art archive</p>
          </li>
          <li>
            <p className="landing-page-paragraph">
              3. Filter what you see by the details you provided
            </p>
          </li>
        </ul>
      </section>

      <section className="landing-page-section landing-page-upcoming">
        <h2 className="backlit-text">Upcoming Features</h2>
        <ul className="landing-page-features-list">
          <li>
            <p className="landing-page-paragraph">
              - Create and export printable pdf's
            </p>
          </li>
          <li>
            <p className="landing-page-paragraph">
              - Add images to art entries
            </p>
          </li>
          <li>
            <p className="landing-page-paragraph">
              - Create an account so your archive is only visible by you
            </p>
          </li>
          <li>
            <p className="landing-page-paragraph">
              - Save filtered lists for later reference
            </p>
          </li>
        </ul>
      </section>

      <section>
        <h3>After you are finished looking around..</h3>
        <p>Please take 5 min to fill out this survey </p>
        <a
          href="https://forms.gle/tvykpNnGvvqngxXT6"
          rel="noreferrer noopener"
          target="_blank"
        >
          -Link to survey-
        </a>
      </section>
    </>
  );
}

export default LandingPage;
