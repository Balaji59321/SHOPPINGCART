import React from "react";
import DonutChart from "react-donut-chart";
import { Grid } from "@mui/material";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart,
  ArcElement,
  Legend,
  Tooltip,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import Heading from "./Heading";
Chart.register(
  ArcElement,
  Legend,
  Tooltip,
  LinearScale,
  CategoryScale,
  PointElement,
  LineElement,
  Filler
);
function DounutChart() {
  let options = {
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          fontColor: "#000080",
          pointStyle: "circle",
          usePointStyle: true,
        },
      },
      padding: 10,
      responsive: true,
      maintainAspectRatio: true,
    },
    cutout: 120,
  };

  let data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        borderWidth: 0,
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  let options1 = {
    plugins: {
      legend: { display: false },
      tooltip: {
        callbacks: {
          // beforeTitle: function (context) {
          //   return "before the title";
          // },
        },
      },
      scales: {
        x: [
          {
            labels: ["January", "February", "March", "April", "May", "June"],
            lineWidth: 0,
          },
        ],
      },
    },
    fill: true,
  };

  return (
    <Grid container>
      <Grid
        item
        xs={12}
        md={7}
        lg={8}
        px={{ xs: 0, sm: 20, md: 10, lg: 5 }}
        py={5}
      >
        <Heading title={"Earnings Overview"} />
        <Line
          options={options1}
          data={{
            labels: [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
            datasets: [
              {
                label: "Earnings ($)",
                data: [
                  0, 10000, 5000, 15000, 10000, 20000, 15000, 25000, 20000,
                  30000, 25000, 35000,
                ],
                borderColor: "rgb(29, 60, 146)",
                tension: 0.4,
                fill: true,
              },
            ],
          }}
          style={{ backgroundColor: "white", padding: "30px" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={5}
        lg={4}
        px={{ xs: 0, sm: 20, md: 10, lg: 5 }}
        py={5}
      >
        <Heading title={"Revenue Sources"} />
        <Doughnut
          options={options}
          data={data}
          style={{
            backgroundColor: "#eee",
            padding: "30px",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default DounutChart;
