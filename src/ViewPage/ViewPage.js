import React from "react";
import "./ViewPage.css";

// const newStaticItems = [
//   {
//     title: "Lahaina Fish",
//     medium: "oil",
//     description: "a colorful green and purple fish",
//     location: "Maui Hands Lahaina",
//     availability: "Complicated",
//     price: "2500"
//   },
//   {
//     title: "Honu",
//     medium: "mixed media",
//     description: "a turtle in a sea of blue",
//     availability: "Unavailable",
//     location: "somewhere in Canada"
//   },
//   {
//     title: "Dancing Clown",
//     medium: "acrylic",
//     description: "a scary clown",
//     location: "Maui Hands Lahaina",
//     availability: "Complicated",
//     price: "2500"
//   },
//   {
//     title: "Makawao Fish",
//     medium: "mixed media",
//     description: "A fish of the mountain",
//     availability: "Unavailable",
//     size: "20x40"
//   },
//   {
//     title: "Haleakala",
//     medium: "acrylic",
//     description: "A giant volcano that looks like a mountain",
//     size: "20x16",
//     availability: "Available",
//     price: "3000"
//   }
// ];

const newStaticItem = {
  title: "Haleakala",
  medium: "acrylic",
  description: "A giant volcano that looks like a mountain",
  size: "20x16",
  availability: "Available",
  price: "3000"
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

class ViewPage extends React.Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>your archive</h1>
        </header>
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
          <ul className="filter-list">
            {renderItemDetails()}

            <li className="filter-new">
              <form className="filter-form">
                <label htmlFor="filter-attr">+</label>
                <select name="filter-attr">
                  <option>New Filter</option>
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
        <section>
          <ul className="view-list">
            <li className="add-item-detail">
              <div>
                <p>filter results</p>
              </div>
            </li>
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

export default ViewPage;
