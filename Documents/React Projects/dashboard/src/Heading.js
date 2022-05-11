import React from "react";
import { Box } from "@mui/system";

function Heading(props) {
  return (
    <Box
      sx={{ display: "flex", fontWeight: 800, backgroundColor: "white" }}
      px={2}
      py={2}
    >
      {props.title}
    </Box>
  );
}

export default Heading;
