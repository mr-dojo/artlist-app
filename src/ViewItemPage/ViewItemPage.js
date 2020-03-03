import React from "react";
import StoreContext from "../StoreContext";
import PropTypes from "prop-types";
import { findItem } from "../item-helper";
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
          <button type="button">edit</button>
          <button type="button">add details</button>
          <button type="delete">delete</button>
        </section>
      </>
    );
  }
}

ViewItemPage.propTypes = {
  id: PropTypes.string
};

ViewItemPage.contextType = StoreContext;

export default ViewItemPage;
