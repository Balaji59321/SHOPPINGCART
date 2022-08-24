const mongoose = require("mongoose");

module.exports = {
    async connect(){
        try {
            await mongoose.connect(process.env.DB)
        }
        catch(err){
            console.log(err);
        }
    }
}