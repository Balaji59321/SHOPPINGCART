const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const db = require("./db")
const user = require("./router/user")

dotenv.config();

db.connect();
app.use(cors());
app.use(express.json());
app.use("/",(req,res,next) =>{
    console.log("hello");
    next();
})

app.use("/get",user)

app.listen(process.env.PORT || 3010, () => {
    console.log("Server running in 3010")
})