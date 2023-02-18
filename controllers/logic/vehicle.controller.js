/** dto */
const dto = require("../../models/dto/vehicle.dto");

exports.create = (req, res, next) => {
    let vhc = {
        plate: req.body.plate,
        model: req.body.model,
        color: req.body.color,
        type: req.body.type,
        mileage: req.body.mileage,
        brand: req.body.brand,
        capacity: req.body.capacity,
        doc_id: req.body.doc_id
    };

    dto.create(vhc, (err, data) => {
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
    let vhc = {
        plate: req.body.plate,
        model: req.body.model,
        color: req.body.color,
        type: req.body.type,
        mileage: req.body.mileage,
        brand: req.body.brand,
        capacity: req.body.capacity,
        doc_id: req.body.doc_id
    };
    dto.update({ _id: req.body.id }, vhc, (err, data) => {
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
    dto.delete({ _id: req.body.id }, vhc, (err, data) => {
        if (err) {
            return res.status(400).json({
                error: err,
            });
        }
        res.status(204).json();
    });
};
