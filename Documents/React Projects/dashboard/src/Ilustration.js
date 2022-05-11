import React from "react";
import Heading from "./Heading";
import { Grid, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";

function Ilustration() {
  return (
    <Grid
      container
      px={{ xs: 2, sm: 2, md: 5 }}
      pt={5}
      pb={4}
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography>
        <Heading title={"Illustrations"} />
      </Typography>
      <Grid item alignSelf={"center"} mt={3}>
        <img
          src="https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg"
          alt="illustration"
          width={"70%"}
          style={{ display: "block", margin: "auto" }}
        />
      </Grid>
      <Typography variant="p" my={2} sx={{ lineHeight: 1.5 }}>
        Add some quality, svg illustrations to your project courtesy of unDraw,
        a constantly updated collection of beautiful svg images that you can use
        completely free and without attribution!
      </Typography>
      <a href="#" style={{ textDecoration: "none" }}>
        Browse Illustrations on unDraw →
      </a>
    </Grid>
  );
}

export default Ilustration;
