import { Box } from "@mui/system";
import { grey } from "@mui/material/colors";

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
    // <Box sx={{ bgcolor: "text.primary", color: "background.paper", p: 2 }}>
    //   text.primary
    // </Box>
  );
};

export default Footer;
