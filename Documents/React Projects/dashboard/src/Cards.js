import { Grid } from "@mui/material";
import React from "react";
import SideCard from "./SideCard";
import { blue, green, lightBlue, orange } from "@mui/material/colors";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SpeakerNotesIcon from "@mui/icons-material/SpeakerNotes";
import EmailIcon from "@mui/icons-material/Email";

const Cards = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={6} lg={3} px={5} py={1}>
        <SideCard
          title={"EARNINGS (MONTHLY)"}
          des={"$40,000"}
          color={blue[900]}
          icon={
            <CalendarMonthIcon
              fontSize="large"
              color="disabled"
              sx={{ backgroundColor: "inherit" }}
            />
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3} px={5} py={1}>
        <SideCard
          title={"EARNINGS (ANNUAL)"}
          des={"$215,000"}
          color={green[600]}
          icon={
            <CurrencyRupeeIcon
              fontSize="large"
              color="disabled"
              sx={{ backgroundColor: "inherit" }}
            />
          }
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3} px={5} py={1}>
        <SideCard
          title={"TASKS"}
          des={"50%"}
          color={lightBlue[400]}
          icon={
            <SpeakerNotesIcon
              fontSize="large"
              color="disabled"
              sx={{ backgroundColor: "inherit" }}
            />
          }
          progress
        />
      </Grid>
      <Grid item xs={12} sm={6} lg={3} px={5} py={1}>
        <SideCard
          title={"PENDING REQUESTS"}
          des={18}
          color={orange[300]}
          icon={
            <EmailIcon
              fontSize="large"
              color="disabled"
              sx={{ backgroundColor: "inherit" }}
            />
          }
        />
      </Grid>
    </Grid>
  );
};

export default Cards;
