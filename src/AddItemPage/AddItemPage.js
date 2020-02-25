import React from "react";
import "./AddItemPage.css";

class AddItemPage extends React.Component {
  render() {
    return (
      <>
        <header role="banner">
          <h1>Item title</h1>
        </header>

        <section>
          <ul class="add-item-list">
            <li class="add-item">
              <div>
                <p>Medium: "Mixed Media"</p>
              </div>
            </li>
            <li class="add-item">
              <div>
                <p>Available</p>
              </div>
            </li>
            <li class="add-item">
              <div>
                <p>Size: 25" x 18"</p>
              </div>
            </li>
            <li class="add-item">
              <div>
                <p>Price: $150 USD</p>
              </div>
            </li>
            <li class="add-item-new">
              <form class="add-item-form">
                <label for="add-item-attr">+</label>
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
