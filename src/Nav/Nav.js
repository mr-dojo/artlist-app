import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <Link to={`/`}>
          <button type="button">home</button>
        </Link>
        <Link to={`/view`}>
          <button type="button">all</button>
        </Link>
        <Link to={`/add`}>
          <button type="button">add</button>
        </Link>
      </nav>
    );
  }
}

export default Nav;
