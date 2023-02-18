/** Packages */
const mongoose = require("mongoose");
const config = require("config");

const mongoDBInfo = config.get("db-connections.mongodb");

/** MongoDB Connection */
const connStr = `mongodb+srv://${mongoDBInfo.user}:${mongoDBInfo.password}@${mongoDBInfo.host}/${mongoDBInfo.dbname}`;

module.exports = () => {
    mongoose.connect(connStr);

    mongoose.connection.on("connected", () => {
        console.log("MongoDB Server Connected");
    });

    mongoose.connection.on("disconnected", () => {
        console.log("MongoDB Server Disconnected");
    });

    mongoose.connection.on("error", () => {
        console.log("MongoDB Server Connection Error");
    });

    mongoose.connection.on("SIGINT", () => {
        mongoose.connection.close(() => {
            console.log("MongoDB Server Connected");
        });
    });
};
