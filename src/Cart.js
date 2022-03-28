import Box from "@mui/material/Box";
import { useContext } from "react";
import Context from "./Context";
import ReactDOM from "react-dom";
import styles from "./Cart.module.css";
import { Button } from "@mui/material";
const Cart = (props) => {
  const ctx = useContext(Context);
  console.log("cart page", ctx);

  const BackDrop = () => {
    return (
      <Box
        sx={{
          position: "absolute",
          zIndex: 100,
          top: 0,
          right: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(216, 238, 238, 0.7)",
          display: "flex",
        }}
        onClick={() => props.cart()}
      />
    );
  };

  const Overlay = () => {
    return (
      <Box
        py={0}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          margin: "auto",
          zIndex: 999,
          width: {
            sm: "90%",
            md: "50%",
          },
          backgroundColor: "rgb(241, 162, 162)",
          textAlign: "center",
          overflow: "auto",
          height: "70%",
        }}
        my={"auto"}
      >
        <Box
          component="h1"
          sx={{ backgroundColor: "#111", color: "#fff" }}
          py={1}
          mx={2}
        >
          Items in Cart
        </Box>
        {ctx.items.length > 0 &&
          ctx.items.map(
            (ele, ind) =>
              Object.keys(ele)[0] && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 7,
                    backgroundColor: "#ddd",
                    borderRadius: 3,
                    boxShadow: "3px 3px 5px",
                    textAlign: "left",
                  }}
                  px={5}
                  py={2}
                  mx={5}
                  my={2}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <p className={styles.item}>{ele["name"]}</p>
                    <span>Amount ($) :{" " + ele.price}</span>
                  </Box>
                  {Object.keys(ele)[0] ? (
                    <Box sx={{ display: "flex", alignItems: "center" }}>
                      <button
                        onClick={() => {
                          return ctx.onRemoveItem(ele.id, ele.price);
                        }}
                      >
                        -
                      </button>
                      <Box px={1}>{ele["quantity"]}</Box>
                      <button
                        onClick={() => {
                          return ctx.onAddItem(ele.id, ele.price);
                          // console.log("I am execurted");
                        }}
                      >
                        +
                      </button>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Box>
              )
          )}
      </Box>
    );
  };
  return (
    <>
      {ReactDOM.createPortal(<BackDrop />, document.getElementById("backdrop"))}
      {ReactDOM.createPortal(<Overlay />, document.getElementById("overlay"))}
    </>
  );
};

export default Cart;
