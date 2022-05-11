import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function Footer() {
  return (
    <Box
      sx={{
        textAlign: "center",
      }}
      px={5}
      mt={5}
    >
      <Typography sx={{ backgroundColor: "white", color: "#999" }} p={4}>
        Copyright © Your Website 2021
      </Typography>
    </Box>
  );
}

export default Footer;
