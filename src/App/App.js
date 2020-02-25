import React from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import AddItemPage from "../AddItemPage/AddItemPage";
import "./App.css";

class App extends React.Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        <Route path="/add" component={AddItemPage} />
        {/* <Route path="/view" component={ViewPage} /> */}
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <Nav></Nav>
        <main>{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
