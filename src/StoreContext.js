const React = require("react");

const StoreContext = React.createContext({
  items: [],
  filters: []
});

export default StoreContext;
