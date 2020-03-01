import React from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import AddItemPage from "../AddItemPage/AddItemPage";
import ViewPage from "../ViewPage/ViewPage";
import ViewItemPage from "../ViewItemPage/ViewItemPage";
import StoreContext from "../StoreContext";
import { API_ENDPOINT } from "../config";
import "./App.css";

class App extends React.Component {
  state = {
    items: [],
    filters: []
  };

  componentDidMount() {
    fetch(`${API_ENDPOINT}/list`)
      .then(res => {
        if (!res.ok) {
          return res.json();
        }
        return res.json();
      })
      .then(items => {
        this.setState({ items });
        console.log(this.state.items);
      })
      .catch(error => {
        console.log({ error });
      });
  }
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
    const contextValue = {
      items: this.state.items,
      filters: this.state.filters
    };
    return (
      <StoreContext.Provider value={contextValue}>
        <div className="App">
          <Nav />
          <main>{this.renderMainRoutes()}</main>
        </div>
      </StoreContext.Provider>
    );
  }
}

export default App;
