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
    filteredItems: [],
    activeFilters: {}
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

  // filters items and updates context.filteredItems
  itemsFilter = (activeFilters, items) => {
    let returnItems = [...items];
    let filterKeys = Object.keys(activeFilters);

    filterKeys = filterKeys.filter(key => activeFilters[key] !== undefined);

    filterKeys.forEach(key => {
      returnItems = returnItems.filter(item => {
        if (item[key]) {
          return item[key]
            .toLowerCase()
            .includes(activeFilters[key].toLowerCase());
        } else {
          return false;
        }
      });
    });

    if (activeFilters.availability) {
      returnItems = returnItems.filter(item => {
        if (
          item.availability.toLowerCase() ===
          activeFilters.availability.toLowerCase()
        ) {
          return true;
        } else {
          return false;
        }
      });
    }

    this.setState({
      filteredItems: returnItems
    });

    return returnItems;
  };

  addNewItem = newItem => {
    this.setState({
      items: [...this.state.items, newItem]
    });
  };

  deleteItem = item_id => {
    const itemsAfterDelete = this.state.items.filter(
      item => parseInt(item.id) !== parseInt(item_id)
    );
    this.setState({
      items: [...itemsAfterDelete]
    });
  };

  updateItem = (item_id, updatedItem) => {
    const itemsAfterUpdate = [];
    this.state.items.forEach(item => {
      if (parseInt(item.id) !== parseInt(item_id)) {
        itemsAfterUpdate.push(item);
      } else {
        itemsAfterUpdate.push(updatedItem);
      }
    });
    this.setState({
      items: [...itemsAfterUpdate]
    });
  };

  changeFilters = currentFilters => {
    this.setState({ activeFilters: currentFilters });
  };

  render() {
    const contextValue = {
      items: this.state.items,
      filteredItems: this.state.filteredItems,
      activeFilters: this.state.activeFilters,
      itemsFilter: this.itemsFilter,
      changeFilters: this.changeFilters,
      addNewItem: this.addNewItem,
      deleteItem: this.deleteItem,
      updateItem: this.updateItem
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
