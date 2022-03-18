import React from "react";

const Context = React.createContext({
  items: [],
  onAddItem: () => {},
  onRemoveItem: () => {},
});

export default Context;
