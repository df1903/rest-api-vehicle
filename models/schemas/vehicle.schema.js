/** Packages */

const mongoose = require("mongoose");

/** Schema Creation */
const vehicleSchema = new mongoose.Schema({
    plate: {
        type: "String",
        required: true,
        unique: true,
    },
    model: {
        type: "String",
        required: true,
    },
    color: {
        type: "String",
        required: true,
    },
    type: {
        type: "String",
        required: true,
    },
    mileage: {
        type: "String",
        required: true,
    },
    brand: {
        type: "String",
        required: true,
    },
    capacity: {
        type: "String",
        required: true,
    },
    doc_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "coll_owner",
        required: true,
    },
});

/** Schema Exportation */
module.exports = vehicleSchema;
