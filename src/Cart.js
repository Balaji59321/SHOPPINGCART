import Box from "@mui/material/Box";
import { useContext } from "react";
import Context from "./Context";
const Cart = (props) => {
  const ctx = useContext(Context);
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
    >
      <Box
        py={0}
        sx={{
          width: {
            sm: "90%",
            md: "50%",
          },
          backgroundColor: "rgb(241, 162, 162)",
          textAlign: "center",
          overflow: "auto",
          margin: "auto",
          height: "50%",
        }}
        my={"auto"}
      >
        <Box component="h1" sx={{ backgroundColor: "#111", color: "#fff" }}>
          Items in Cart
        </Box>
        {ctx.items.map((ele) => (
          <h1>
            {Object.keys(ele)[0]} {"-"} {Object.values(ele)}
          </h1>
        ))}
      </Box>
      {/* {console.log(ctx)} */}
    </Box>
  );
};

export default Cart;
