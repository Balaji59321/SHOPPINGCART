const express = require("express");
const routes = express.Router();
const user = require("./../module/user")

routes.post("/create",user.createUser);
routes.post("/user",user.getUser);
routes.put("/update",user.updateUser);
routes.post("/validate",user.validateUser);

module.exports = routes;