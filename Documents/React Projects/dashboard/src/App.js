import "./App.css";
import Cards from "./Cards";
import Projects from "./Projects";
import FooterCard from "./FooterCard";
import Ilustration from "./Ilustration";
import { Button, Grid, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Box } from "@mui/system";
import DevApproach from "./DevApproach";
import DounutChart from "./DounutChart";
import Footer from "./Footer";
import DownloadIcon from "@mui/icons-material/Download";

function App() {
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        flexDirection={{ xs: "column", sm: "row" }}
        px={{ xs: 1, sm: 5, md: 5, lg: 5 }}
      >
        <Typography variant="h4" py={3} sx={{ fontWeight: 500 }}>
          Dashboard
        </Typography>
        <Typography
          sx={{ display: "flex", alignItems: "center", gap: 2 }}
          style={{
            borderRadius: "3px",
            padding: 10,
            backgroundColor: "rgb(116, 113, 250)",
            fontWeight: 800,
          }}
        >
          <DownloadIcon
            color="disabled"
            // sx={{ backgroundColor: "rgb(116, 113, 250)" }}
          />
          <a
            href="#"
            style={{
              textDecoration: "none",
              backgroundColor: "rgb(116, 113, 250)",
              color: "white",
            }}
          >
            Generate Report
          </a>
        </Typography>
      </Box>
      <Cards />
      <DounutChart />
      <Grid container sx={{ display: "flex", justifyContent: "center" }}>
        <Grid item xs={10} lg={6}>
          <Projects />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Ilustration />
        </Grid>
      </Grid>
      <Grid container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          rowSpacing={3}
          columnSpacing={3}
          px={5}
          sx={{ justifyContent: "center" }}
        >
          <Grid item xs={12} lg={6}>
            <FooterCard
              color={"primary.main"}
              title={"Primary"}
              colorCode={"#4e73df"}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FooterCard
              color={"success.main"}
              title={"Success"}
              colorCode={"#1cc88a"}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FooterCard
              color={"info.main"}
              title={"Info"}
              colorCode={"#36b9cc"}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FooterCard
              color={"warning.main"}
              title={"Warning"}
              colorCode={"#f6c23e"}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FooterCard
              color={"error.main"}
              title={"Danger"}
              colorCode={"#e74a3b"}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FooterCard
              color={grey[500]}
              title={"Secondary"}
              colorCode={"#858796"}
            />
          </Grid>

          <Grid item xs={12} lg={6}>
            <FooterCard
              color={grey[200]}
              title={"Light"}
              colorCode={"#f8f9fc"}
              textColor={"#333"}
            />
          </Grid>
          <Grid item xs={12} lg={6}>
            <FooterCard
              color={grey[700]}
              title={"Dark"}
              colorCode={"#5a5c69"}
            />
          </Grid>
        </Grid>
        <Grid item sm={12} lg={6}>
          <DevApproach />
        </Grid>
      </Grid>

      <Footer />
    </div>
  );
}

export default App;
