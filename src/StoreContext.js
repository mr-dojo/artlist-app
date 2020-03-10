const React = require("react");

const StoreContext = React.createContext({
  items: [],
  filteredItems: [],
  itemsFilter: () => {},
  addNewItem: () => {},
  deleteItem: () => {},
  updateItem: () => {}
});

export default StoreContext;
