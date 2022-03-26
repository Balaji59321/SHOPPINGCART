import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import Navigation from "./Navigation";
import Context from "./Context";
import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [showCart, setShowCart] = useState(false);

  const IncrementHandler = (key) => {
    setCart((prev) => {
      let ind = prev.items.findIndex((ele) => Object.keys(ele)[0] === key);
      prev["items"][ind][key]++;
      return { ...prev };
    });
  };

  const DecrementHandler = (key) => {
    setCart((prev) => {
      let ind = prev.items.findIndex((ele) => Object.keys(ele)[0] === key);
      prev["items"][ind][key] > 0
        ? prev["items"][ind][key]--
        : delete prev["items"][ind][key];
      return { ...prev };
    });
  };

  // console.log("re-rendering");

  const [cart, setCart] = useState({
    items: [],
    onAddItem: (val) => IncrementHandler(val),
    onRemoveItem: (val) => DecrementHandler(val),
  });

  const changeHandler = (val) => {
    setCart({
      ...cart,
      items: val,
    });
  };

  const cartHandler = () => {
    setShowCart((prev) => !prev);
  };

  // console.log(cart);

  return (
    <Context.Provider value={cart}>
      <div className="App">
        {/* Navigation bar */}
        <Navigation cart={cartHandler} />
        {/* Header content of page */}
        <Header />
        {/* Content for the page */}
        <Section val={changeHandler} />
        {/* Footer to the page */}
        <Footer />
        {showCart && <Cart cart={cartHandler} Increment={IncrementHandler} />}
      </div>
    </Context.Provider>
  );
}

export default App;
