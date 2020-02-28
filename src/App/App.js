import React from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import AddItemPage from "../AddItemPage/AddItemPage";
import ViewPage from "../ViewPage/ViewPage";
import ViewItemPage from "../ViewItemPage/ViewItemPage";
import "./App.css";

class App extends React.Component {
  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={LandingPage} />
        <Route path="/add" component={AddItemPage} />
        <Route exact path="/view" component={ViewPage} />
        <Route path="/view/item" component={ViewItemPage} />
      </>
    );
  }

  render() {
    return (
      <div className="App">
        <Nav />
        <main>{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
