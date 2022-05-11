import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Heading from "./Heading";

function DevApproach() {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", lineHeight: 1.5 }}
      px={5}
      pt={5}
    >
      <Heading title={"Development Approach"} />
      <Typography variant="p" my={3}>
        SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order
        to reduce CSS bloat and poor page performance. Custom CSS classes are
        used to create custom components and custom utility classes.
      </Typography>
      <Typography variant="p">
        Before working with this theme, you should become familiar with the
        Bootstrap framework, especially the utility classes.
      </Typography>
    </Box>
  );
}

export default DevApproach;
