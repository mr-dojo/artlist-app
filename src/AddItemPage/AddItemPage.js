import React from "react";
import StoreContext from "../StoreContext";
import { API_ENDPOINT } from "../config";
import "./AddItemPage.css";

const newStaticItem = {
  title: "Lahaina Fish",
  medium: "mixed media",
  description: "a turtle in a sea of blue"
};

const renderItemTitle = () =>
  newStaticItem.title ? <h1>"{newStaticItem.title}"</h1> : <h1>add an item</h1>;

const renderItemDetails = () => {
  const details = Object.keys(newStaticItem);
  return details.map((detail, key) => (
    <li className="add-item-detail" key={key}>
      <p>
        <span className="add-item-detail-name">{detail}</span>: "
        {newStaticItem[detail]}"
      </p>
    </li>
  ));
};

const handleNewItemSubmit = (e, addNewItem) => {
  e.preventDefault();
  const allDetails = {
    title: e.target.title.value || null,
    description: e.target.description.value || null,
    medium: e.target.medium.value || null,
    location: e.target.location.value || null,
    price: e.target.price.value || null,
    size: e.target.size.value || null,
    availability: e.target.availability.value || null
  };

  const itemDetailsKeys = Object.keys(allDetails);

  const deleteNullKeys = () => {
    for (let i = 0; i < itemDetailsKeys.length; i++) {
      if (allDetails[itemDetailsKeys[i]] === null) {
        delete allDetails[itemDetailsKeys[i]];
      }
    }
  };

  deleteNullKeys();

  fetch(`${API_ENDPOINT}/list`, {
    method: "POST",
    body: JSON.stringify(allDetails),
    headers: {
      "content-type": "application/json"
    }
  })
    .then(response => {
      if (!response.ok) {
        console.log(response);
      }
      return response.json();
    })
    .then(response => {
      addNewItem(response);
    })
    .catch(err => {
      console.log(err);
    });
};

class AddItemPage extends React.Component {
  static contextType = StoreContext;

  render() {
    const { addNewItem } = this.context;
    return (
      <>
        <header role="banner">{renderItemTitle()}</header>
        <section>
          <h2>add details:</h2>
          <form onSubmit={e => handleNewItemSubmit(e, addNewItem)}>
            <div className="add-item-input-box">
              <label htmlFor="title">*title</label>
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
              <label htmlFor="price">price</label>
              <input
                type="number"
                name="price"
                placeholder="eg: 256.99"
                id="price"
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
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
                <option value="Complicated">Complicated</option>
              </select>
            </div>
            <button type="submit">save</button>
            <button type="submit">done</button>
          </form>
        </section>
        <section>
          <h2>item details:</h2>
          <ul className="add-item-list">{renderItemDetails()}</ul>
          <button type="button">edit</button>
          <button type="button">add details</button>
          <button type="delete">delete</button>
        </section>
      </>
    );
  }
}

export default AddItemPage;
