import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <Link to={`/`}>home</Link>
        <Link to={`/add`}>add</Link>
        <Link to={`/view`}>view</Link>
        <Link to={`/view/item`}>*temp item page*</Link>
      </nav>
    );
  }
}

export default Nav;
