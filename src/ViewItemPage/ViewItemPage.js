import React from "react";
import StoreContext from "../StoreContext";
import "./ViewItemPage.css";

const renderItemDetails = items => {
  const i = items[1];
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

class ViewItemPage extends React.Component {
  static contextType = StoreContext;

  state = {
    items: this.context.items
  };

  render() {
    const items = this.context;
    console.log(this.context);
    return (
      <>
        <header role="banner">
          <h1>"{items.title}"</h1>
        </header>
        <section>
          <h2>item details:</h2>
          <ul className="view-item-details-list">{renderItemDetails(items)}</ul>
          <button type="button">edit</button>
          <button type="button">add details</button>
          <button type="delete">delete</button>
        </section>
      </>
    );
  }
}

export default ViewItemPage;
