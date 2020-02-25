import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <Link to={`/add`}>add item</Link>
        <Link to={`/view`}>view</Link>
      </nav>
    );
  }
}

export default Nav;
