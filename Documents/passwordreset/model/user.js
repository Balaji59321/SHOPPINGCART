const mongoose = require("mongoose");

const user = mongoose.Schema({
    mail: {
        type: String
    },
    password: {
        type: String
    }
})

const userModel = mongoose.model("user",user);
module.exports = userModel;