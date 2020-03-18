const React = require("react");

const StoreContext = React.createContext({
  items: [],
  filteredItems: [],
  activeFilters: {},
  changeFilters: () => {},
  itemsFilter: () => {},
  addNewItem: () => {},
  deleteItem: () => {},
  updateItem: () => {}
});

export default StoreContext;
