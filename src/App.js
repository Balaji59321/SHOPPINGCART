import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import Navigation from "./Navigation";
import Context from "./Context";
import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState({
    items: [],
    onAddItem: () => {},
    onRemoveItem: () => {},
  });
  const [showCart, setShowCart] = useState(false);

  const changeHandler = (val) => {
    setCart({
      items: val,
    });
  };

  const cartHandler = () => {
    setShowCart((prev) => !prev);
    console.log(showCart);
  };

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
        {showCart && <Cart cart={cartHandler} />}
      </div>
    </Context.Provider>
  );
}

export default App;
