import Cards from "./Cards";
import { Grid } from "@mui/material";
import { useState } from "react";

const Section = (props) => {
  const [items, setItems] = useState([]);

  const changeHandler = (name) => {
    setItems((prev) => {
      if (prev.some((ele) => Object.keys(ele)[0] === name)) {
        let index = [...prev].findIndex((ele) => Object.keys(ele)[0] === name);
        let newVal = [...prev];
        newVal[index][name]++;
        props.val(newVal);
        return newVal;
      } else {
        let newVal = [...prev];
        newVal.push({ [name]: 1 });
        props.val(newVal);
        console.log(newVal);
        return newVal;
      }
    });

    // console.log(items);
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
          price="$40.00 - $80.00"
          click={changeHandler}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Special Item"
          btnName="Add to cart"
          price="$20.00 $18.00"
          click={changeHandler}
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
          star
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Sale Items"
          btnName="Add to cart"
          price="$50.00 $25.00"
          click={changeHandler}
          strike
          sale
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Fancy Products"
          btnName="View options"
          price="$120.00 - $280.00"
          click={changeHandler}
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Special Items"
          btnName="Add to cart"
          price="$20.00 $18.00"
          click={changeHandler}
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
          star
        />
      </Grid>
    </Grid>
  );
};

export default Section;
