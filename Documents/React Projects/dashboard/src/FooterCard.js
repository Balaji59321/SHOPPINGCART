import { Box, Typography } from "@mui/material";
import React from "react";

function FooterCard(props) {
  return (
    <Box
      p={2}
      sx={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: [props.color],
        color: props.textColor ? props.textColor : "white",
        borderRadius: 1,
        flex: "1 0",
      }}
    >
      <Typography
        bgcolor={"inherit"}
        sx={{ fontWeight: 900, fontSize: 20, backgroundColor: [props.color] }}
        px={2}
      >
        {props.title}
      </Typography>
      <Typography sx={{ backgroundColor: [props.color] }} px={2}>
        {props.colorCode}
      </Typography>
    </Box>
  );
}

export default FooterCard;
