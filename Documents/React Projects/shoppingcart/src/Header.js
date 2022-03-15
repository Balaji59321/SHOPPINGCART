import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const Header = () => {
  return (
    <Typography py={8} sx={{ bgcolor: "text.primary" }}>
      <Box
        sx={{
          textAlign: "center",
          color: "white",
        }}
        py={3}
      >
        <Box
          my={0}
          sx={{
            fontSize: {
              xs: 28,
              sm: 28,
              md: 35,
              lg: 40,
              xl: 45,
            },
            fontWeight: "bolder",
          }}
        >
          Shop in Style
        </Box>
        <Box sx={{ lineHeight: "normal" }}>
          With this shop homepage template
        </Box>
      </Box>
    </Typography>
  );
};

export default Header;
