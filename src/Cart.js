import Box from "@mui/material/Box";
import { useContext } from "react";
import Context from "./Context";
import ReactDOM from "react-dom";
const Cart = (props) => {
  const ctx = useContext(Context);

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
          height: "50%",
        }}
        my={"auto"}
      >
        <Box component="h1" sx={{ backgroundColor: "#111", color: "#fff" }}>
          Items in Cart
        </Box>
        {/* {ctx.items.map((ele, ind) => console.log(ele, Object.keys(ele)[0]))} */}
        {ctx.items.map(
          (ele, ind) =>
            Object.keys(ele)[0] && (
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                }}
              >
                <h4>{Object.keys(ele)[0]}</h4>
                {Object.keys(ele)[0] ? (
                  <>
                    <button
                      onClick={() => {
                        ctx.onRemoveItem(Object.keys(ele)[0]);
                      }}
                    >
                      -
                    </button>
                    <input
                      type="number"
                      value={Object.values(ctx["items"][ind])}
                      sx={{
                        display: "inline-block",
                        width: "50px !important",
                      }}
                    />
                    <button
                      onClick={() => {
                        ctx.onAddItem(Object.keys(ele)[0]);
                      }}
                    >
                      +
                    </button>
                  </>
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
