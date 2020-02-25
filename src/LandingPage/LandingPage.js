import React from "react";
import "./LandingPage.css";

class LandingPage extends React.Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Artlist</h1>
          <h2>Helping artists organize</h2>
        </header>

        <section>
          <h3>Why did we create Artlist?</h3>
          <p>
            We want artists to be able to create. We want artists to easily keep
            track of their pieces and show clients work that matches their needs
          </p>
        </section>

        <section>
          <h3>What does it do for you?</h3>
          <p>
            Artlist allows you to see keep track of your work. It shows you,
            at-a-glance, all of your work that is available and creates
            customised lists to present to clients
          </p>
        </section>

        <section>
          <h3>How does it do it?</h3>
          <p>
            Upload works with as many details as you desire. Then use the view
            tab to filter and create by the details you enter
          </p>
        </section>
      </>
    );
  }
}

export default LandingPage;
