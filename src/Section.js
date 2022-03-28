import Cards from "./Cards";
import { Grid } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import Context from "./Context";

const Section = (props) => {
  const ctx = useContext(Context);
  const [items, setItems] = useState([]);
  const [amount, setAmount] = useState(0);
  const [operation, setOperation] = useState("plus");

  // useEffect(() => {
  //   props.val(items, amount, operation);
  // }, [items, operation]);

  const changeHandler = (type, name, price, id) => {
    const priceFormatted = Math.round(price.split("$")[1]);
    if (type === "add") {
      setItems((prev) => {
        if (prev.some((ele) => Object.keys(ele)[0] === name)) {
          let index = [...prev].findIndex(
            (ele) => Object.keys(ele)[0] === name
          );
          let newVal = [...prev];
          newVal[index]["quantity"]++;
          setAmount(priceFormatted);
          setOperation("plus");
          // props.val(newVal);
          // props.val(newVal, priceFormatted, "plus");
          return newVal;
        } else {
          let newVal = [...prev];
          newVal.push({
            id: Math.round(Math.random() * Date.now()),
            name: [name].toString(),
            quantity: 1,
            price: Math.round(price.split("$")[1]),
          });
          setAmount(priceFormatted);
          setOperation("plus");
          props.val(newVal, priceFormatted, "plus");
          // ctx.increment
          // props.val(newVal);
          return newVal;
        }
      });
    } else {
      setItems((prev) => {
        let index = [...prev].findIndex((ele) => ele.name === name);
        let newVal = [...prev];
        delete newVal[index];
        newVal.splice(index, 1);
        // setAmount((prev) => +prev - priceFormatted);
        setOperation("minus");
        props.val(newVal, priceFormatted, "minus");
        return newVal;
      });
    }
  };

  return (
    <Grid
      container
      rowSpacing={5}
      columnSpacing={{ xs: 2, md: 5 }}
      //   px={{ xs: 2, sm: 5, md: 10, lg: 20, xl: 40 }}
      px={{ xs: 2, sm: 5, md: 8, lg: 20, xl: 30 }}
      py={7}
      sx={{ justifyContent: "center" }}
    >
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Fancy Product"
          btnName="View options"
          price="$80.00"
          click={changeHandler}
          id="card1"
          key="card1"
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Special Item"
          btnName="Add to cart"
          price="$20.00 $18.00"
          click={changeHandler}
          id="card2"
          key="card2"
          strike
          star
          sale
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Sale Item"
          btnName="Add to cart"
          price="$50.00 $25.00"
          click={changeHandler}
          id="card3"
          key="card3"
          strike
          sale
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Popular Item"
          btnName="Add to cart"
          price="$40.00"
          click={changeHandler}
          id="card4"
          key="card4"
          star
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Sale Items"
          btnName="Add to cart"
          price="$50.00 $25.00"
          click={changeHandler}
          id="card5"
          key="card5"
          strike
          sale
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Fancy Products"
          btnName="View options"
          price="$280.00"
          click={changeHandler}
          id="card6"
          key="card6"
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Special Items"
          btnName="Add to cart"
          price="$20.00 $18.00"
          click={changeHandler}
          id="card7"
          key="card7"
          strike
          star
          sale
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Popular Items"
          btnName="Add to cart"
          price="$40.00"
          click={changeHandler}
          id="card8"
          key="card8"
          star
        />
      </Grid>
    </Grid>
  );
};

export default Section;
