import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <Link to={`/login`}>login</Link>
        <Link to={`/signup`}>signup</Link>
        <Link to={`/add`}>add item</Link>
        <Link to={`/view`}>view</Link>
      </nav>
    );
  }
}

export default Nav;
