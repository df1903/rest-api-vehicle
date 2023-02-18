/** Packages */
const express = require("express");
const config = require("config");
const bodyParser = require("body-parser");

/** App Configuration */
const app = express();
const port = config.get("server-port");
const jsonParser = bodyParser.json();
const urlEncodedParser = bodyParser.urlencoded({ extended: true });
const ipFn = require("./middleware/getIpAdress");

app.use(jsonParser);
app.use(urlEncodedParser);
app.use("*", ipFn);

/** Routes */
const ownerRoutes = require("./routes/owner.route");
ownerRoutes(app);

const vehicleRoutes = require("./routes/vehicle.route");
vehicleRoutes(app);

/** Methods */
app.get("/", (req, res, next) => {
    res.send("Welcome to Vehicle/Owner RestApi");
});

app.listen(port, () => {
    console.log("Server is running...");
});
