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
            <div className="add-item-input-box">
              <label htmlFor="title">*title</label>
              <input type="text" name="title" id="title" required></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="description">description</label>
              <input type="text" name="description" id="description"></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="size">size</label>
              <input type="text" name="size" id="size"></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="price">price</label>
              <input type="number" name="price" id="price"></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="medium">medium</label>
              <input type="text" name="medium" id="medium"></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="location">location</label>
              <input type="text" name="location" id="location"></input>
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
      </>
    );
  }
}

export default AddItemPage;
