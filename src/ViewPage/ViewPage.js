import React from "react";
import StoreContext from "../StoreContext";
import { Link } from "react-router-dom";
import ErrorCheck from "../ErrorCheck";
import { API_ENDPOINT } from "../config";
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
          <Link to={`/view/${item.id}`}>
            <button type="button">view</button>
          </Link>
          <Link to={`/edit/${item.id}`}>
            <button type="button">edit</button>
          </Link>
          <button type="delete" onClick={e => this.handleDelete(e, item.id)}>
            delete
          </button>
        </li>
      );
    });
  };

  handleDelete = (e, item_id) => {
    e.preventDefault();
    fetch(`${API_ENDPOINT}/list/${item_id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) return res.json().then(e => new Error(e));
        return;
      })
      .then(() => {
        this.context.deleteItem(item_id);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  handleFilterSubmit = e => {
    e.preventDefault();

    let allFilters = {
      title: e.target.title.value || undefined,
      description: e.target.description.value || undefined,
      size: e.target.size.value || undefined,
      medium: e.target.medium.value || undefined,
      location: e.target.location.value || undefined,
      availability: e.target.availability.value || undefined
    };

    let noNullFilters = {};

    Object.keys(allFilters).forEach(key => {
      if (allFilters[key] !== undefined || null) {
        noNullFilters[key] = allFilters[key];
      }
    });

    this.setState({
      activeFilters: noNullFilters
    });

    this.context.itemsFilter(allFilters, this.context.items);
  };

  static contextType = StoreContext;

  render() {
    const { items, filteredItems } = this.context;
    const itemsToUse = Object.keys(this.state.activeFilters).length
      ? filteredItems
      : items;

    return (
      <ErrorCheck>
        <header role="banner">
          <h1>all items</h1>
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
            <div className="add-item-input-box">
              <label htmlFor="description">description</label>
              <input
                type="text"
                name="description"
                placeholder="eg: green turtle"
                id="description"
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="size">size</label>
              <input
                type="text"
                name="size"
                placeholder={`eg: 22" x 18"`}
                id="size"
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="medium">medium</label>
              <input
                type="text"
                name="medium"
                placeholder="eg: iron sculpture"
                id="medium"
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="location">location</label>
              <input
                type="text"
                name="location"
                placeholder="eg: SoAndSo Gallery Paia, HI"
                id="location"
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="availability">availability</label>
              <select id="availability">
                <option value=""></option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
                <option value="Complicated">Complicated</option>
              </select>
            </div>
            <button type="submit">save</button>
          </form>
        </section>
        <section>
          <h2>active filters:</h2>
          <ul className="filter-list">{this.renderFilterDetails()}</ul>
        </section>
        <section>
          <ul className="view-list">{this.renderViewList(itemsToUse)}</ul>
        </section>
      </ErrorCheck>
    );
  }
}

ViewPage.contextType = StoreContext;

export default ViewPage;
