const React = require("react");

const appContext = React.createContext({
  items: [],
  filters: []
});

export default appContext;
