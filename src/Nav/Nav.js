import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <Link to={`/`}>landing page</Link>
        <Link to={`/add`}>add item</Link>
        <Link to={`/view`}>view</Link>
        <Link to={`/view/item`}>view item</Link>
      </nav>
    );
  }
}

export default Nav;
