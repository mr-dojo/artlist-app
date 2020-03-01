import React from "react";
import StoreContext from "../StoreContext";
import "./ViewPage.css";

const activeFilters = {
  medium: "acrylic",
  availability: "Available"
};

const renderFilterDetails = () => {
  const details = Object.keys(activeFilters);
  return details.map((detail, key) => (
    <li className="add-filter-detail" key={key}>
      <p>
        <span className="filter-detail-name">{detail}</span>: "
        {activeFilters[detail]}"
      </p>
    </li>
  ));
};

const renderItemDetails = item => {
  const i = item;
  const itemDetails = {
    description: i.description || null,
    size: i.size || null,
    price: i.price || null,
    medium: i.medium || null,
    location: i.location || null,
    availability: i.availability || null
  };

  const itemDetailsKeys = Object.keys(itemDetails);
  const deleteNullKeys = () => {
    for (let i = 0; i < itemDetailsKeys.length; i++) {
      if (itemDetails[itemDetailsKeys[i]] === null) {
        delete itemDetails[itemDetailsKeys[i]];
        itemDetailsKeys.splice(i, 1);
      }
    }
  };

  deleteNullKeys();

  return itemDetailsKeys.map((detail, key) => (
    <li className="view-item-detail" key={key}>
      <p>
        <span className="view-item-detail-name">{detail}</span>: "
        {itemDetails[detail]}"
      </p>
    </li>
  ));
};

const renderViewList = items => {
  return items.map((item, i) => {
    return (
      <li className="view-list-item" key={i}>
        <h2>"{item.title}"</h2>
        <h3>item details:</h3>
        <ul className="view-item-details-list">{renderItemDetails(item)}</ul>
        <button type="button">edit</button>
        <button type="button">add details</button>
        <button type="delete">delete</button>
      </li>
    );
  });
};

class ViewPage extends React.Component {
  static contextType = StoreContext;

  render() {
    const { items } = this.context;
    return (
      <>
        <header role="banner">
          <h1>view list</h1>
        </header>
        <section>
          <h2>add filter:</h2>
          <form onSubmit={e => e.preventDefault()}>
            <div className="add-filter-input-box">
              <label htmlFor="title">*title</label>
              <input
                type="text"
                name="title"
                placeholder="title of item"
                id="title"
                required
              ></input>
            </div>
            <div className="add-filter-input-box">
              <label htmlFor="description">description</label>
              <input
                type="text"
                name="description"
                placeholder="eg: green turtle"
                id="description"
              ></input>
            </div>
            <div className="add-filter-input-box">
              <label htmlFor="size">size</label>
              <input
                type="text"
                name="size"
                placeholder={`eg: 22" x 18"`}
                id="size"
              ></input>
            </div>
            <div className="add-filter-input-box">
              <label htmlFor="price">price</label>
              <input
                type="number"
                name="price"
                placeholder="eg: 256.99"
                id="price"
              ></input>
            </div>
            <div className="add-filter-input-box">
              <label htmlFor="medium">medium</label>
              <input
                type="text"
                name="medium"
                placeholder="eg: iron sculpture"
                id="medium"
              ></input>
            </div>
            <div className="add-filter-input-box">
              <label htmlFor="location">location</label>
              <input
                type="text"
                name="location"
                placeholder="eg: SoAndSo Gallery Paia, HI"
                id="location"
              ></input>
            </div>
            <div className="add-filter-input-box">
              <label htmlFor="availability">availability</label>
              <select id="availability">
                <option value="available">available</option>
                <option value="unavailable">unavailable</option>
                <option value="complicated">complicated</option>
              </select>
            </div>
            <button type="submit">save</button>
          </form>
        </section>
        <section>
          <h2>active filters:</h2>
          <ul className="filter-list">{renderFilterDetails()}</ul>
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
          <ul className="view-list">{renderViewList(items)}</ul>
        </section>
      </>
    );
  }
}

export default ViewPage;
