/** packages */
const controller = require("../controllers/logic/owner.controller");

module.exports = (app) => {
    app.get("/owner", (req, res, next) => {
        controller.getAll(req, res, next);
    });

    app.get("/owner/byid/:id", (req, res, next) => {
        controller.getById(req, res, next);
    });

    app.post("/owner", (req, res, next) => {
        controller.create(req, res, next);
    });

    app.put("/owner", (req, res, next) => {
        controller.update(req, res, next);
    });

    app.delete("/owner", (req, res, next) => {
        controller.delete(req, res, next);
    });
};
