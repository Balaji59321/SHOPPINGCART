import * as React from "react";
import Box from "@mui/material/Box";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import LinearProg from "./LinearProgress";
import Heading from "./Heading";
const Projects = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      pt={5}
    >
      <Typography sx={{ fontSize: 18 }} color="text.secondary">
        <Heading title={"Projects"} />
      </Typography>
      <Grid container sx={{ display: "flex", flexDirection: "column" }}>
        <Grid item>
          <LinearProg
            title={"Server Migration"}
            value={20}
            per={"20%"}
            color={"#d32f2f"}
          />
        </Grid>
        <Grid item>
          <LinearProg
            title={"Sales Tracking"}
            value={40}
            per={"40%"}
            color={"warning.main"}
          />
        </Grid>
        <Grid item>
          <LinearProg
            title={"Customer Database"}
            value={60}
            per={"60%"}
            color={"primary.main"}
          />
        </Grid>
        <Grid item>
          <LinearProg
            title={"Payout Details"}
            value={80}
            per={"80%"}
            color={"info.main"}
          />
        </Grid>
        <Grid item>
          <LinearProg
            title={"Account Setup"}
            value={100}
            per={"Complete!"}
            color={"success.main"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
export default Projects;
