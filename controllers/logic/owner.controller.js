/** dto */
const dto = require("../../models/dto/owner.dto");

exports.create = (req, res, next) => {
    let owner = {
        doc: req.body.doc,
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
    };

    dto.create(owner, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(201).json({
            info: data,
        });
    });
};

exports.update = (req, res, next) => {
    let owner = {
        doc: req.body.doc,
        name: req.body.name,
        lastname: req.body.lastname,
        phone: req.body.phone,
        email: req.body.email,
    };
    dto.update({ _id: req.body.id }, owner, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(201).json({
            info: data,
        });
    });
};

exports.getAll = (req, res, next) => {
    dto.getAll({}, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(200).json({
            info: data,
        });
    });
};

exports.getById = (req, res, next) => {
    dto.getById({ _id: req.params.id }, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(200).json({
            info: data,
        });
    });
};

exports.delete = () => {
    dto.delete({ _id: req.body.id }, owner, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(204).json();
    });
};
