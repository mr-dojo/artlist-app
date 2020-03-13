import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <div className="nav-name-container">
          <p className="nav-app-name">Artlist</p>
        </div>
        <div className="nav-links">
          <Link className="nav-link" to={`/`}>
            about
          </Link>
          <p className="nav-link-divider">|</p>
          <Link className="nav-link" to={`/view`}>
            all
          </Link>
          <p className="nav-link-divider">|</p>
          <Link className="nav-link" to={`/add`}>
            add
          </Link>
        </div>
      </nav>
    );
  }
}

export default Nav;
