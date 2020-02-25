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

        <section>
          <h2>Start getting organized!</h2>
          <form class="signup-form">
            <div>
              <label for="first-name">First name</label>
              <input
                placeholder="First Name"
                type="text"
                name="first-name"
                id="first-name"
              />
            </div>
            <div>
              <label for="last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                placeholder="Last Name"
              />
            </div>
            <div>
              <label for="username">Email</label>
              <input type="text" name="username" id="username" />
            </div>
            <div>
              <label for="password">Password</label>
              <input type="password" name="password" id="password" />
            </div>
            <button type="submit">Sign Up</button>
          </form>
        </section>
      </>
    );
  }
}

export default LandingPage;
