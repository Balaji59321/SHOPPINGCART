import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";

// provides a footer to the page
const Footer = () => {
  return (
    <Box
      py={6}
      sx={{
        textAlign: "center",
        bgcolor: grey[900],
        color: "white",
        fontWeight: "600",
      }}
    >
      Copyright © Your Website 2021
    </Box>
  );
};

export default Footer;
