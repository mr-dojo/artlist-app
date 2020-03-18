import React from "react";
import StoreContext from "../StoreContext";
import { Link } from "react-router-dom";
import ErrorCheck from "../ErrorCheck";
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

  cancelFilterButton = () => {
    return (
      <button
        type="button"
        className="filter-button"
        onClick={e => {
          this.setState({ filterSection: "button" });
        }}
      >
        cancel
      </button>
    );
  };

  renderFilterSection = () => {
    const filterSection = this.state.filterSection;
    if (filterSection === "button") {
      return (
        <>
          <button
            type="button"
            className="filter-button"
            onClick={e => this.setState({ filterSection: "choose a filter" })}
          >
            apply filter
          </button>
          {Object.keys(this.context.activeFilters).length !== 0 ? (
            <button
              type="button"
              className="filter-button"
              onClick={e => {
                this.context.changeFilters({});
              }}
            >
              clear filters
            </button>
          ) : (
            ""
          )}
        </>
      );
    } else if (filterSection === "choose a filter") {
      return (
        <div className="add-filter-input-box">
          <label htmlFor="add-filter" aria-label={filterSection}></label>
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
          {this.cancelFilterButton()}
        </div>
      );
    } else if (filterSection === "availability") {
      return (
        <form
          className="add-item-filter-box"
          onSubmit={e => this.handleFilterSubmit(e)}
        >
          <label htmlFor="availability" aria-label="availability"></label>
          <select id="availability" name="availability">
            <option value="Available">Available</option>
            <option value="Unavailable">Unavailable</option>
            <option value="Complicated">Complicated</option>
          </select>
          <button className="filter-button" type="submit">
            apply{" "}
          </button>
          {this.cancelFilterButton()}
        </form>
      );
    } else {
      return (
        <form onSubmit={e => this.handleFilterSubmit(e)}>
          <div className="add-filter-input-box">
            <label htmlFor={filterSection} aria-label={filterSection}></label>
            <input
              type="text"
              placeholder={`enter ${filterSection}`}
              name={filterSection}
              id={filterSection}
            ></input>
            <button className="filter-button" type="submit">
              apply{" "}
            </button>
            {this.cancelFilterButton()}
          </div>
        </form>
      );
    }
  };

  renderFilterDetails = () => {
    const details = Object.keys(this.context.activeFilters);
    return (
      <>
        <h2>Showing items filtered by:</h2>
        <ul className="filter-list">
          {details.map((detail, key) => (
            <li key={key}>
              <p className="view-item-detail-p">
                <span className="filter-detail-name">{detail}</span>: "
                {this.context.activeFilters[detail]}"
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  };

  renderItemDetails = item => {
    return Object.keys(item).map((detail, key) => {
      if (item[detail] && detail !== "id" && detail !== "title") {
        return (
          <li className="view-item-detail" key={key}>
            <p className="view-item-detail-p">
              <span className="view-item-detail-name">{detail}</span>:{" "}
              {item[detail]}
            </p>
          </li>
        );
      } else {
        return "";
      }
    });
  };

  renderViewList = items => {
    return items.map((item, i) => {
      return (
        <li className="view-list-item" key={i}>
          <Link to={`/view/${item.id}`} key={i}>
            <h2 className="item-title">"{item.title}"</h2>
            <ul className="view-item-details-list">
              {this.renderItemDetails(item)}
            </ul>
          </Link>
        </li>
      );
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
      ...this.context.activeFilters
    };

    allFilters[targetName()] = targetValue();

    this.context.changeFilters(allFilters);

    this.setState(() => {
      return {
        filterSection: "button"
      };
    });

    this.context.itemsFilter(allFilters, this.context.items);
  };

  static contextType = StoreContext;

  render() {
    const { items, filteredItems } = this.context;
    const itemsToUse = Object.keys(this.context.activeFilters).length
      ? filteredItems
      : items;

    return (
      <ErrorCheck>
        <header role="banner">
          <>
            {Object.keys(this.context.activeFilters).length === 0 ? (
              <h1>all items</h1>
            ) : (
              this.renderFilterDetails()
            )}
          </>
        </header>
        <section>
          <div className="add-filter-container">
            {this.renderFilterSection()}
          </div>
          <ul className="view-list">{this.renderViewList(itemsToUse)}</ul>
        </section>
      </ErrorCheck>
    );
  }
}

ViewPage.contextType = StoreContext;

export default ViewPage;
