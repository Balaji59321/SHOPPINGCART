import React, { useEffect, useState } from "react";
import Context from "./Context";
import { Box } from "@mui/system";
import { Divider, Typography } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

const CartPage = () => {
  const ctx = React.useContext(Context);
  const [amount, setAmount] = useState(ctx["amount"]);
  const [sgst, setSgst] = useState(0);
  const [cgst, setCgst] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setAmount(ctx.amount);
  }, [ctx]);

  useEffect(() => {
    setSgst((amount * 5) / 100);
    setCgst((amount * 5) / 100);
  }, [amount]);

  useEffect(() => {
    setTotal(Math.round(amount + sgst + cgst));
  }, [amount, sgst, cgst]);

  return (
    <Box>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          display: "flex",
          justifyContent: "flex-end",
          margin: "20px",
        }}
      >
        <span
          style={{
            border: "1px solid black",
            padding: 10,
            fontSize: "1rem",
            borderRadius: "3px",
          }}
        >
          Home
        </span>
      </Link>
      <Box sx={{ backgroundColor: "#ccc" }} py={3}>
        <Typography variant="h6" textAlign={"center"} sx={{ fontWeight: 800 }}>
          My Cart
        </Typography>
        <Typography
          variant="p"
          sx={{
            display: "flex",
            justifyContent: "center",
            color: "red",
            fontWeight: 800,
            textAlign: "center",
          }}
          mt={2}
          px={2}
        >
          *Additional Discount of 5% for all purchases above 1000
        </Typography>
      </Box>
      {ctx.items.length > 0 ? (
        <>
          {ctx.items.map(
            (ele, ind) =>
              Object.keys(ele)[0] && (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: 5,
                    backgroundColor: "#ddd",
                    borderRadius: 3,
                    boxShadow: "3px 3px 5px",
                    textAlign: "left",
                  }}
                  px={{ xs: 1.5, md: 2, lg: 10 }}
                  py={2}
                  mx={{ xs: 2, sm: 5, lg: 30 }}
                  my={2}
                  key={Math.random()}
                >
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <p style={{ margin: 0, fontWeight: 800 }}>{ele["name"]}</p>
                    <span>Amount ($) :{" " + ele.price}</span>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-evenly",
                      gap: 5,
                    }}
                  >
                    {Object.keys(ele)[0] ? (
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                          <button
                            onClick={() => ctx.onRemoveItem(ele.id, ele.price)}
                          >
                            -
                          </button>
                          <Box px={1}>{ele["quantity"]}</Box>
                          <button
                            onClick={() => {
                              ctx.onAddItem(ele.id, ele.price);
                            }}
                          >
                            +
                          </button>
                        </Box>
                        <Box>
                          <button
                            onClick={() =>
                              ctx.onDeleteItem(ele.id, ele.price, ele.quantity)
                            }
                          >
                            Delete
                          </button>
                        </Box>
                      </Box>
                    ) : (
                      <></>
                    )}
                    {Object.keys(ele)[0] ? (
                      <Box>{ele.quantity * ele.price}</Box>
                    ) : (
                      <></>
                    )}
                  </Box>
                </Box>
              )
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
            px={{ sm: 20 }}
            mx={3}
          >
            <Divider
              style={{
                padding: "50px 10px 10px 10px",
                fontWeight: 800,
              }}
            >
              Invoice Details
            </Divider>
            <Typography>Amount : {amount}</Typography>
            <Typography>SGST : {sgst}</Typography>
            <Typography>CGST : {cgst}</Typography>
            <Typography>Total Amount : {total}</Typography>
            {amount > 1000 && <>Discount : {total - 50}</>}
          </Box>

          <Box
            sx={{ display: "flex", justifyContent: "space-evenly" }}
            px={{ sm: 60 }}
            my={3}
          >
            <Button variant="outlined" onClick={() => alert("Ordering Now")}>
              Order Now
            </Button>
            <Button variant="outlined" onClick={() => alert("Order Cancelled")}>
              Cancel
            </Button>
          </Box>
        </>
      ) : (
        <Box sx={{ textAlign: "center" }} mt={3}>
          No Items Found{" "}
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
