import React from "react";
import StoreContext from "../StoreContext";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { findItem } from "../item-helper";
import { API_ENDPOINT } from "../config";
import "./ViewItemPage.css";

class ViewItemPage extends React.Component {
  static contextType = StoreContext;

  static defaultProps = {
    match: {
      params: {}
    }
  };
  // renders details for the item
  renderItemDetails = item_id => {
    const item = findItem(this.context.items, item_id);

    return Object.keys(item).map((detail, key) => (
      <li className="item-detail-container" key={key}>
        <span className="view-item-detail-name">{detail}</span>:
        <p>{item[detail]}</p>
      </li>
    ));
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
        this.props.history.push(`/view`);
        this.context.deleteItem(item_id);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    const { item_id } = this.props.match.params;
    return this.context.items.length ? (
      <>
        <header role="banner">
          <h1>{findItem(this.context.items, item_id).title}</h1>
        </header>
        <section>
          <h2>item details:</h2>
          <ul className="view-item-details desktop-expand">
            {this.renderItemDetails(item_id)}
          </ul>
          <div>
            <Link to={`/view/`}>
              <button className="item-button" type="button">
                back
              </button>
            </Link>
            <Link to={`/edit/${item_id}`}>
              <button className="item-button" type="button">
                edit
              </button>
            </Link>
            <button
              className="item-button"
              type="delete"
              onClick={e => this.handleDelete(e, item_id)}
            >
              delete
            </button>
          </div>
        </section>
      </>
    ) : (
      ""
    );
  }
}

ViewItemPage.propTypes = {
  id: PropTypes.string
};

ViewItemPage.contextType = StoreContext;

export default ViewItemPage;
