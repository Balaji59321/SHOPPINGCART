import "./App.css";
import Footer from "./Footer";
import Header from "./Header";
import Section from "./Section";
import Navigation from "./Navigation";
import Context from "./Context";
import { useState } from "react";
import Cart from "./Cart";
import CartPage from "./CartPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {
  const [showCart, setShowCart] = useState(false);

  const IncrementHandler = (key, price) => {
    setCart((prev) => {
      let newState = { ...prev };
      let ind = newState.items.findIndex((ele) => ele.id === key);
      newState["items"][ind]["quantity"] =
        newState["items"][ind]["quantity"] + 1;
      newState.amount = newState.amount + price;
      return { ...newState };
    });
  };

  const DecrementHandler = (key, price) => {
    setCart((prev) => {
      let ind = prev.items.findIndex((ele) => ele.id === key);
      if (prev["items"][ind]["quantity"] > 0) {
        prev["items"][ind]["quantity"] = prev["items"][ind]["quantity"] - 1;
        prev.amount = prev.amount - price;
      } else {
        prev["items"].splice(ind, 1);
      }

      return { ...prev };
    });
  };

  const DeleteHandler = (key, price, quantity) => {
    setCart((prev) => {
      let ind = prev.items.findIndex((ele) => ele.id === key);
      prev["items"].splice(ind, 1);
      prev.amount = prev.amount - price * quantity;
      return { ...prev };
    });
  };

  const [cart, setCart] = useState({
    items: [],
    onAddItem: (val, price) => IncrementHandler(val, price),
    onRemoveItem: (val, price) => DecrementHandler(val, price),
    onDeleteItem: (val, price, qua) => DeleteHandler(val, price, qua),
    amount: 0,
  });

  const changeHandler = (val, amount, operation) => {
    if (operation === "plus") {
      setCart((prev) => {
        return { ...prev, items: val, amount: cart.amount + amount };
      });
    } else {
      setCart((prev) => {
        return { ...prev, items: val, amount: cart.amount - amount };
      });
    }
  };

  const cartHandler = () => {
    setShowCart((prev) => !prev);
  };

  console.log(cart);

  return (
    <Context.Provider value={cart}>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="App">
                {/* Navigation bar */}
                <Navigation cart={cartHandler} />
                {/* Header content of page */}
                <Header />
                {/* Content for the page */}
                <Section val={changeHandler} />
                {/* <Section /> */}
                {/* Footer to the page */}
                <Footer />
                {showCart && <Cart cart={cartHandler} />}
              </div>
            }
          />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
