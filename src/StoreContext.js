const React = require("react");

const StoreContext = React.createContext({
  items: [],
  filterTitle: () => {},
  addNewItem: () => {}
});

export default StoreContext;
