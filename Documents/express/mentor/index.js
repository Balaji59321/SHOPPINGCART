const express = require("express");
// const cors = require("cors");
const app = express();
const db = require("./db");
const dotenv = require("dotenv");
const route = require("./routes/student");
const mentor = require("./routes/mentor");

dotenv.config();
db.connect();
// app.use(cors.json());
app.use(express.json());

app.use("/", (req, res, next) => {
  console.log("Middleware");
  next();
});

app.use("/student", route);
app.use("/mentor", mentor);

app.use((err, req, res, next) => {
  res.send({ code: 404, message: "" + err.toString().split(":")[1].trim() });
});

app.listen(3000, () => {
  console.log("Server Connection Established Successfully");
});
