import React from "react";
import StoreContext from "../StoreContext";
import { API_ENDPOINT } from "../config";
import { findItem } from "../item-helper";
import "../AddItemPage/AddItemPage.css";

class EditItemPage extends React.Component {
  constructor() {
    super();
    this.state = {
      editItem: {}
    };
  }

  static defaultProps = {
    match: {
      params: {}
    }
  };

  componentDidMount() {
    const item = findItem(this.context.items, this.props.match.params.item_id);
    this.setState({
      editItem: item
    });
  }

  handleItemSubmit = e => {
    e.preventDefault();
    const allDetails = {
      title: this.state.editItem.title,
      description: this.state.editItem.description,
      medium: this.state.editItem.medium,
      location: this.state.editItem.location,
      price: this.state.editItem.price,
      size: this.state.editItem.size,
      availability: this.state.editItem.availability
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
    const { item_id } = this.props.match.params;

    fetch(`${API_ENDPOINT}/list/${item_id}`, {
      method: "PATCH",
      body: JSON.stringify(allDetails),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(response => {
        if (!response.ok) {
          console.log("yup, its running alright.. crap");
          return response.json().then(error => Promise.reject(error));
        }
        return response.json();
      })
      .then(response => {
        this.context.updateItem(item_id, response[0]);
        this.props.history.push(`/view/${response[0].id}`);
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  static contextType = StoreContext;

  render() {
    return (
      <>
        <header role="banner">
          <h1>{this.state.editItem.title}</h1>
        </header>
        <section>
          <h2>add details:</h2>
          <form onSubmit={e => this.handleItemSubmit(e)}>
            <div className="add-item-input-box">
              <label htmlFor="title">title</label>
              <input
                type="text"
                name="title"
                placeholder="title of item"
                id="title"
                value={this.state.editItem.title || ""}
                onChange={e =>
                  this.setState({
                    editItem: { ...this.state.editItem, title: e.target.value }
                  })
                }
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="description">description</label>
              <input
                type="text"
                name="description"
                placeholder="eg: green turtle"
                id="description"
                value={this.state.editItem.description || ""}
                onChange={e =>
                  this.setState({
                    editItem: {
                      ...this.state.editItem,
                      description: e.target.value
                    }
                  })
                }
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="size">size</label>
              <input
                type="text"
                name="size"
                placeholder={`eg: 22" x 18"`}
                id="size"
                value={this.state.editItem.size || ""}
                onChange={e =>
                  this.setState({
                    editItem: { ...this.state.editItem, size: e.target.value }
                  })
                }
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="price">price</label>
              <input
                type="number"
                name="price"
                placeholder="eg: 256.99"
                id="price"
                value={this.state.editItem.price || ""}
                onChange={e =>
                  this.setState({
                    editItem: { ...this.state.editItem, price: e.target.value }
                  })
                }
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="medium">medium</label>
              <input
                type="text"
                name="medium"
                placeholder="eg: iron sculpture"
                id="medium"
                value={this.state.editItem.medium || ""}
                onChange={e =>
                  this.setState({
                    editItem: { ...this.state.editItem, medium: e.target.value }
                  })
                }
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="location">location</label>
              <input
                type="text"
                name="location"
                placeholder="eg: SoAndSo Gallery HI"
                id="location"
                value={this.state.editItem.location || ""}
                onChange={e =>
                  this.setState({
                    editItem: {
                      ...this.state.editItem,
                      location: e.target.value
                    }
                  })
                }
              ></input>
            </div>
            <div className="add-item-input-box">
              <label htmlFor="availability">availability</label>
              <select
                id="availability"
                onChange={e =>
                  this.setState({
                    editItem: {
                      ...this.state.editItem,
                      availability: e.target.value
                    }
                  })
                }
              >
                <option value={this.state.editItem.availability || "Available"}>
                  {this.state.editItem.availability || ""}
                </option>
                <option value="Available">Available</option>
                <option value="Unavailable">Unavailable</option>
                <option value="Complicated">Complicated</option>
              </select>
            </div>
            <button type="submit">save</button>
            <button type="delete">delete</button>
          </form>
        </section>
      </>
    );
  }
}

export default EditItemPage;
