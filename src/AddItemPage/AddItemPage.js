import React from "react";
import "./AddItemPage.css";

const newStaticItem = {
  title: "A Honu World",
  medium: "mixed media",
  description: "a turtle in a sea of blue"
};

const renderItemTitle = () => {
  if (newStaticItem.title) {
    return <h1>"{newStaticItem.title}"</h1>;
  } else {
    return <h1>add an item</h1>;
  }
};

const renderItemDetails = () => {
  const details = Object.keys(newStaticItem);
  return details.map((detail, key) => (
    <li className="add-item-detail" key={key}>
      <div>
        <p>
          {detail}: {newStaticItem[detail]}
        </p>
      </div>
    </li>
  ));
};

class AddItemPage extends React.Component {
  render() {
    return (
      <>
        <header role="banner">{renderItemTitle()}</header>
        <section>
          <form>
            <div className="add-item-input-box">
              <label htmlFor="title">*title</label>
              <input
                type="text"
                name="title"
                placeholder="title of item"
                id="title"
                required
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
                <option value="available">available</option>
                <option value="unavailable">unavailable</option>
                <option value="complicated">complicated</option>
              </select>
            </div>
            <button type="submit">save</button>
          </form>
        </section>
        <section>
          <ul className="add-item-list">
            {renderItemDetails()}
            <li className="add-item-new">
              <form className="add-item-form">
                <label htmlFor="add-item-attr">+</label>
                <select name="add-item-attr">
                  <option>Add Details</option>
                  <option>Description</option>
                  <option>Size</option>
                  <option>Price</option>
                  <option>Medium</option>
                  <option>Location</option>
                  <option>Availablility</option>
                  <option>Style</option>
                  <option>Quantity</option>
                </select>
              </form>
            </li>
          </ul>
        </section>
      </>
    );
  }
}

export default AddItemPage;
