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

  renderItemDetails = item_id => {
    const item = findItem(this.context.items, item_id);

    return Object.keys(item).map((detail, key) => (
      <li className="view-item-detail" key={key}>
        <p>
          <span className="view-item-detail-name">{detail}</span>: "
          {item[detail]}"
        </p>
      </li>
    ));
  };

  handleDelete = (e, item_id) => {
    e.preventDefault();
    console.log(API_ENDPOINT);
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
        this.props.history.push(`/view`);
      })
      .catch(error => {
        console.error({ error });
      });
  };

  render() {
    const { item_id } = this.props.match.params;
    return (
      <>
        <header role="banner">
          <h1>{findItem(this.context.items, item_id).title}</h1>
        </header>
        <section>
          <h2>item details:</h2>
          <ul className="view-item-details-list">
            {this.renderItemDetails(item_id)}
          </ul>
          <Link to={`/edit/${item_id}`}>
            <button type="button">edit</button>
          </Link>
          <button type="delete" onClick={e => this.handleDelete(e, item_id)}>
            delete
          </button>
        </section>
        <Link to={`/view/`}>
          <button type="button">back</button>
        </Link>
      </>
    );
  }
}

ViewItemPage.propTypes = {
  id: PropTypes.string
};

ViewItemPage.contextType = StoreContext;

export default ViewItemPage;
