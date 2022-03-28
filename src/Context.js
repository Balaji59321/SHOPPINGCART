import React from "react";

const Context = React.createContext({
  items: [],
  onAddItem: (val, price) => {},
  onRemoveItem: (val, price) => {},
  onDeleteItem: (val, price, qua) => {},
  amount: 0,
});

export default Context;
