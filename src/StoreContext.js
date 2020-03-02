const React = require("react");

const StoreContext = React.createContext({
  items: [],
  filters: [],
  filteredItems: [],
  filterTitle: () => {}
});

export default StoreContext;
