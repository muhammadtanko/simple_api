const mongoose = require("mongoose");

module.exports = async () => {

    let dbConnection = mongoose.connection;
    dbConnection
        .on("connected", () => {
            console.log("connected to mongo");
        })
        .on("error", (error:any) => {
            console.log("error connecting to mongo", error.message);
        })
        .on("disconnected", () => {
            setTimeout(async () => {
                await mongoose.connect("");
            }, 5000)
        });
        try {
            await mongoose.connect("mongodb://localhost:27017/users");
        } catch (error) {
            
        }

}

