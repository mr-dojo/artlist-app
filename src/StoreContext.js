const React = require("react");

const StoreContext = React.createContext({
  items: [],
  filterTitle: () => {},
  addNewItem: () => {},
  deleteItem: () => {},
  updateItem: () => {}
});

export default StoreContext;
