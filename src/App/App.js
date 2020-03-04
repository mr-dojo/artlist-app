import React from "react";
import { Route } from "react-router-dom";
import Nav from "../Nav/Nav";
import LandingPage from "../LandingPage/LandingPage";
import AddItemPage from "../AddItemPage/AddItemPage";
import ViewPage from "../ViewPage/ViewPage";
import ViewItemPage from "../ViewItemPage/ViewItemPage";
import EditItemPage from "../EditItemPage/EditItemPage";
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
  };

  addNewItem = newItem => {
    this.setState({
      items: [...this.state.items, newItem]
    });
  };

  deleteItem = item_id => {
    const itemsAfterDelete = this.state.items.filter(
      item => item.id !== item_id
    );
    this.setState({
      items: [...itemsAfterDelete]
    });
  };

  render() {
    const contextValue = {
      items: this.state.items,
      filterTitle: this.filterTitle,
      addNewItem: this.addNewItem,
      deleteItem: this.deleteItem
    };

    return (
      <StoreContext.Provider value={contextValue}>
        <div className="App">
          <Nav />
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route path="/add" component={AddItemPage} />
            <Route exact path="/view" component={ViewPage} />
            <Route path="/view/:item_id" component={ViewItemPage} />
            <Route path="/edit/:item_id" component={EditItemPage} />
          </main>
        </div>
      </StoreContext.Provider>
    );
  }
}

export default App;
