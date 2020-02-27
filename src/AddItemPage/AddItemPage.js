import React from "react";
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
      <div>
        <p>
          {detail}: {newStaticItem[detail]}
        </p>
      </div>
    </li>
  ));
};

class AddItemPage extends React.Component {
  // handleSave = e => {
  //   e.preventDefault();
  //   const title = e.target.title.value;
  //   const description = e.target.description.value || null;
  //   const size = e.target.size.value || null;
  //   const price = e.target.price.value || null;
  //   const medium = e.target.medium.value || null;
  //   const location = e.target.location.value || null;
  //   const availability = e.target.availability.value;

  //   const detailsObject = {
  //     title,
  //     description,
  //     size,
  //     price,
  //     medium,
  //     location,
  //     availability
  //   };

  //   const detailKeys = Object.keys(detailsObject);

  //   //This function deletes null details from detailsObject
  //   (() => {
  //     for (let i = 0; i < detailKeys.length; i++) {
  //       if (detailsObject[detailKeys[i]] === null) {
  //         delete detailsObject[detailKeys[i]];
  //       }
  //     }
  //   })();
  // };

  render() {
    return (
      <>
        <header role="banner">{renderItemTitle()}</header>
        <section>
          <form onSubmit={e => this.handleSave(e)}>
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
