import React from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import LinearProgress from "@mui/material/LinearProgress";

function SideCard(props) {
  return (
    <Box
      py={4}
      px={2}
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        borderWidth: "0 0 0 5px",
        borderStyle: "solid",
        backgroundColor: "#fff",
        alignItems: "center",
        borderRadius: "5px",
      }}
      borderColor={props.color}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          backgroundColor: "white",
          flex: "0 1",
        }}
        textAlign="start"
      >
        <Typography
          variant="div"
          sx={{
            backgroundColor: "white",
            fontSize: "0.6rem",
            fontWeight: 700,
          }}
          width={props.progress ? 10 : 130}
          mb={0.5}
          color={props.color}
        >
          {props.title}
        </Typography>
        <Typography variant="div" sx={{ backgroundColor: "white" }}>
          {props.des}
        </Typography>
      </Box>
      {props.progress ? (
        <div style={{ backgroundColor: "white" }}>
          <LinearProgress
            variant="determinate"
            value={50}
            sx={{
              height: "5px",
              width: "90px",
              borderRadius: "10px",
            }}
          />
        </div>
      ) : (
        ""
      )}
      {props.icon}
    </Box>
  );
}

export default SideCard;
