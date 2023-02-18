/** Packages */
const mongoose = require("mongoose");
const validator = require("mongoose-unique-validator");

/** Schema Creation */
const ownerSchema = new mongoose.Schema({
    doc: {
        type: "String",
        required: true,
        unique: true,
    },
    name: {
        type: "String",
        required: true,
    },
    lastname: {
        type: "String",
        required: true,
    },
    phone: {
        type: "String",
        required: true,
        unique: true,
    },
    email: {
        type: "String",
        required: true,
        unique: true,
    },
});

/** Schema Exportation */
ownerSchema.plugin(validator);
module.exports = ownerSchema;
