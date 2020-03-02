const React = require("react");

const StoreContext = React.createContext({
  items: [],
  filters: [],
  filteredItems: [],
  filterTitle: () => {},
  addNewItem: () => {}
});

export default StoreContext;
