import React from "react";
import "./ViewItemPage.css";

const staticViewItem = {
  title: "Haleakala",
  medium: "acrylic",
  description: "A giant volcano that looks like a mountain",
  availability: "Available",
  price: "3000"
};

const renderItemDetails = () => {
  const itemDetails = {
    description: staticViewItem.description || null,
    size: staticViewItem.size || null,
    price: staticViewItem.price || null,
    medium: staticViewItem.medium || null,
    location: staticViewItem.location || null,
    availability: staticViewItem.availability || null
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
  render() {
    return (
      <>
        <header role="banner">
          <h1>"{staticViewItem.title}"</h1>
        </header>
        <section>
          <h2>item details:</h2>
          <ul className="view-item-details-list">{renderItemDetails()}</ul>
          <button type="button">edit</button>
          <button type="button">add details</button>
          <button type="delete">delete</button>
        </section>
      </>
    );
  }
}

export default ViewItemPage;
