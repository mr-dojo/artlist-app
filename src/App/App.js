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
    filters: [],
    filteredItems: []
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
      })
      .catch(error => {
        console.log({ error });
      });
  }

  filterTitle = filteredItems => {
    this.setState({
      filteredItems: filteredItems
    });
    console.log(filteredItems);
    console.log(
      `After filterTitle ran state.filteredItems = >>>${this.state.filteredItems}<<<`
    );
  };

  addNewItem = newItem => {
    this.setState({
      items: [...this.state.items, newItem]
    });
    console.log(`addNewItem() on App.js RAN with value = ${newItem}`);
    console.log(this.state.items);
  };

  render() {
    const contextValue = {
      items: this.state.items,
      filters: this.state.filters,
      filterTitle: this.filterTitle,
      addNewItem: this.addNewItem
    };

    return (
      <StoreContext.Provider value={contextValue}>
        <div className="App">
          <Nav />
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route path="/add" component={AddItemPage} />
            <Route exact path="/view" component={ViewPage} />
            <Route path="/view/item" component={ViewItemPage} />
          </main>
        </div>
      </StoreContext.Provider>
    );
  }
}

export default App;
