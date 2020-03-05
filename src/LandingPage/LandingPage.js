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
        <h3>Why did I create Artlist?</h3>
        <p className="landing-page-paragraph">
          To help artists keep track of their work.
        </p>
      </section>

      <section className="landing-page-section">
        <h3>How to use it</h3>
        <ul>
          <li>
            <p>- Store artwork titles along with details about each entry</p>
          </li>
          <li>
            <p>
              - View a list of all your artwork and organize it by the details
            </p>
          </li>
          <li>
            <p>
              - Create filtered lists of your artwork for your own reference
            </p>
          </li>
        </ul>
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
