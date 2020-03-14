import React from "react";
import StoreContext from "../StoreContext";
import { API_ENDPOINT } from "../config";
import "./AddItemPage.css";

class AddItemPage extends React.Component {
  constructor() {
    super();
    this.state = {
      newItem: {}
    };
  }
  renderItemTitle = () =>
    Object.keys(this.state.newItem).length ? (
      <h1>"{this.state.newItem.title}"</h1>
    ) : (
      <h1>new item</h1>
    );

  handleNewItemSubmit = e => {
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
          return new Error(response);
        }
        return response.json();
      })
      .then(response => {
        this.context.addNewItem(response);
        this.setState({
          newItem: response
        });
        this.props.history.push(`/view/`);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  static contextType = StoreContext;

  render() {
    return (
      <>
        <header role="banner">{this.renderItemTitle()}</header>
        <section>
          <h2>add details:</h2>
          <form onSubmit={e => this.handleNewItemSubmit(e)}>
            <div className="add-item-input-container">
              <label htmlFor="title" aria-label="input title"></label>
              <input
                type="text"
                placeholder="title (required)"
                name="title"
                id="title"
                required
              ></input>
            </div>
            <div className="add-item-input-container">
              <label
                htmlFor="description"
                aria-label="input description"
              ></label>
              <input
                type="text"
                placeholder="description"
                name="description"
                id="description"
              ></input>
            </div>
            <div className="add-item-input-container">
              <label htmlFor="size" aria-label="input size"></label>
              <input
                type="text"
                placeholder="size"
                name="size"
                id="size"
              ></input>
            </div>
            <div className="add-item-input-container">
              <label htmlFor="price" aria-label="input price"></label>
              <input
                type="number"
                placeholder="price"
                name="price"
                id="price"
              ></input>
            </div>
            <div className="add-item-input-container">
              <label htmlFor="medium" aria-label="input medium"></label>
              <input
                type="text"
                placeholder="medium"
                name="medium"
                id="medium"
              ></input>
            </div>
            <div className="add-item-input-container">
              <label htmlFor="location" aria-label="input location"></label>
              <input
                type="text"
                placeholder="location"
                name="location"
                id="location"
              ></input>
            </div>
            <div className="add-item-input-container">
              <label
                htmlFor="availability"
                aria-label="input availability"
              ></label>
              <select id="availability" placeholder="availability">
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
                <option value="Complicated">Complicated</option>
              </select>
            </div>
            <button className="save-button" type="submit">
              save
            </button>
          </form>
        </section>
      </>
    );
  }
}

export default AddItemPage;
