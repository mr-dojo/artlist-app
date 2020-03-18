import React from "react";
import { Link } from "react-router-dom";
import StoreContext from "../StoreContext";
import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <div className="nav-name-container">
          <Link className="nav-link" to={`/view`}>
            <p className="nav-app-name">Artlist</p>
          </Link>
        </div>
        <div className="nav-links">
          <Link className="nav-link" to={`/`}>
            about
          </Link>
          <p className="nav-link-divider">|</p>
          <Link
            className="nav-link"
            to={`/view`}
            onClick={e => {
              this.context.changeFilters({});
            }}
          >
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

Nav.contextType = StoreContext;

export default Nav;
