/** packages */
const controller = require("../controllers/logic/vehicle.controller");

module.exports = (app) => {
    app.get("/vehicle", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/vehicle/byplate/:plate", (req, res, next) => {
        controller.getByPlate(req, res, next);
    });

    app.post("/vehicle", (req, res, next) => {
        controller.create(req, res, next);
    });

    app.put("/vehicle", (req, res, next) => {
        controller.update(req, res, next);
    });

    app.delete("/vehicle", (req, res, next) => {
        controller.delete(req, res, next);
    });
};
