import React from "react";
import StoreContext from "../StoreContext";
import ErrorCheck from "../ErrorCheck";
import "./ViewPage.css";

class ViewPage extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredItems: [],
      activeFilters: {}
    };
  }
  renderFilterDetails = () => {
    const details = Object.keys(this.state.activeFilters);
    return details.map((detail, key) => (
      <li className="add-filter-detail" key={key}>
        <p>
          <span className="filter-detail-name">{detail}</span>: "
          {this.state.activeFilters[detail]}"
        </p>
      </li>
    ));
  };

  renderItemDetails = item => {
    return Object.keys(item).map((detail, key) =>
      item[detail] ? (
        <li className="view-item-detail" key={key}>
          <p>
            <span className="view-item-detail-name">{detail}</span>: "
            {item[detail]}"
          </p>
        </li>
      ) : (
        ""
      )
    );
  };

  renderViewList = items => {
    return items.map((item, i) => {
      return (
        <li className="view-list-item" key={i}>
          <h2>"{item.title}"</h2>
          <ul className="view-item-details-list">
            {this.renderItemDetails(item)}
          </ul>
          <button type="button">edit</button>
          <button type="button">add details</button>
          <button type="delete">delete</button>
        </li>
      );
    });
  };

  handleFilterSubmit = e => {
    e.preventDefault();
    const activeFilters = { ...this.state.activeFilters };
    activeFilters.title = e.target.title.value;
    this.setState({
      filteredItems: this.context.items.filter(item =>
        item.title.includes(activeFilters.title)
      ),
      activeFilters
    });
  };

  static contextType = StoreContext;

  render() {
    const { items } = this.context;
    const itemsToUse = this.state.filteredItems.length
      ? this.state.filteredItems
      : items;

    return (
      <ErrorCheck>
        <header role="banner">
          <h1>view list</h1>
        </header>
        <section>
          <h2>add filter:</h2>
          <form onSubmit={e => this.handleFilterSubmit(e)}>
            <div className="add-filter-input-box">
              <label htmlFor="title">title</label>
              <input
                type="text"
                name="title"
                placeholder="title of item"
                id="title"
              ></input>
            </div>
            <button type="submit">save</button>
          </form>
        </section>
        <section>
          <h2>active filters:</h2>
          <ul className="filter-list">{this.renderFilterDetails()}</ul>
          <button type="button">edit</button>
          <button type="button">add</button>
          <button type="delete">remove</button>
        </section>
        <section>
          <h2>organize by:</h2>
          <button>Title</button>
          <button>Description</button>
          <button>Size</button>
          <button>Price</button>
          <button>Medium</button>
          <button>Location</button>
          <button>Availablility</button>
          <button>Style</button>
          <button>Quantity</button>
          <ul className="view-list">{this.renderViewList(itemsToUse)}</ul>
        </section>
      </ErrorCheck>
    );
  }
}

ViewPage.contextType = StoreContext;

export default ViewPage;
