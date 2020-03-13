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
      activeFilters: {},
      filterSection: "button"
    };
  }

  renderFilterSection = () => {
    const filterSection = this.state.filterSection;
    if (filterSection === "button") {
      return (
        <button
          type="button"
          onClick={e => this.setState({ filterSection: "choose a filter" })}
        >
          add filter
        </button>
      );
    } else if (filterSection === "choose a filter") {
      return (
        <div className="add-filter-input-box">
          <label htmlFor="add-filter">filter by:</label>
          <select
            id="filter-type"
            onChange={e => this.setState({ filterSection: e.target.value })}
          >
            <option value="" hidden>
              choose one
            </option>
            <option value="title">title</option>
            <option value="description">description</option>
            <option value="size">size</option>
            <option value="medium">medium</option>
            <option value="location">location</option>
            <option value="availability">availability</option>
          </select>
        </div>
      );
    } else if (filterSection === "availability") {
      return (
        <form onSubmit={e => this.handleFilterSubmit(e)}>
          <div className="add-item-input-box">
            <label htmlFor="availability">availability</label>
            <select id="availability" name="availability">
              <option value="Available">Available</option>
              <option value="Unavailable">Unavailable</option>
              <option value="Complicated">Complicated</option>
            </select>
            <button type="submit">filter </button>
          </div>
        </form>
      );
    } else {
      return (
        <form onSubmit={e => this.handleFilterSubmit(e)}>
          <div className="add-filter-input-box">
            <label htmlFor={filterSection}>{filterSection}</label>
            <input type="text" name={filterSection} id={filterSection}></input>
          </div>
          <button type="submit">filter </button>
        </form>
      );
    }
  };

  renderFilterDetails = () => {
    const details = Object.keys(this.state.activeFilters);
    return (
      <section>
        <h2>active filters:</h2>
        <ul className="filter-list">
          {details.map((detail, key) => (
            <li className="add-filter-detail" key={key}>
              <p>
                <span className="filter-detail-name">{detail}</span>: "
                {this.state.activeFilters[detail]}"
              </p>
            </li>
          ))}
        </ul>
        <button
          type="button"
          onClick={e => {
            this.setState({ activeFilters: {} });
          }}
        >
          clear
        </button>
      </section>
    );
  };

  renderItemDetails = item => {
    return Object.keys(item).map((detail, key) =>
      item[detail] ? (
        <li className="view-item-detail" key={key}>
          <p>
            <span className="view-item-detail-name">{detail}</span>:{" "}
            {item[detail]}
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
          <Link to={`/view/${item.id}`} key={i}>
            <h2>"{item.title}"</h2>
            <ul className="view-item-details-list">
              {this.renderItemDetails(item)}
            </ul>
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

    const targetName = () => {
      if (e.target.medium) {
        return e.target.medium.name;
      } else if (e.target.title) {
        return e.target.title.name;
      } else if (e.target.description) {
        return e.target.description.name;
      } else if (e.target.location) {
        return e.target.location.name;
      } else if (e.target.size) {
        return e.target.size.name;
      } else if (e.target.availability) {
        return e.target.availability.name;
      }
    };

    const targetValue = () => {
      if (e.target.medium) {
        return e.target.medium.value;
      } else if (e.target.title) {
        return e.target.title.value;
      } else if (e.target.description) {
        return e.target.description.value;
      } else if (e.target.location) {
        return e.target.location.value;
      } else if (e.target.size) {
        return e.target.size.value;
      } else if (e.target.availability) {
        return e.target.availability.value;
      }
    };

    let allFilters = {
      ...this.state.activeFilters
    };

    allFilters[targetName()] = targetValue();

    this.setState(() => {
      return {
        activeFilters: allFilters,
        filterSection: "button"
      };
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
        <section>{this.renderFilterSection()}</section>
        <>
          {Object.keys(this.state.activeFilters).length === 0
            ? ""
            : this.renderFilterDetails()}
        </>
        <section>
          <ul className="view-list">{this.renderViewList(itemsToUse)}</ul>
        </section>
      </ErrorCheck>
    );
  }
}

ViewPage.contextType = StoreContext;

export default ViewPage;
