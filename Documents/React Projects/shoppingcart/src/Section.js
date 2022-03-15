import Cards from "./Cards";
import { Box } from "@mui/system";
import { Grid } from "@mui/material";

const Section = () => {
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
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Special Item"
          btnName="Add to cart"
          price="$20.00 $18.00"
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
          strike
          sale
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards name="Popular Item" btnName="Add to cart" price="$40.00" star />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Sale Item"
          btnName="Add to cart"
          price="$50.00 $25.00"
          strike
          sale
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Fancy Product"
          btnName="View options"
          price="$120.00 - $280.00"
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards
          name="Special Item"
          btnName="Add to cart"
          price="$20.00 $18.00"
          strike
          star
          sale
        />
      </Grid>
      <Grid item xs={6} sm={4} md={3}>
        <Cards name="Popular Item" btnName="Add to cart" price="$40.00" star />
      </Grid>
    </Grid>
  );
};

export default Section;
