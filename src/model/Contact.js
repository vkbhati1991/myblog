const mongoose = require('mongoose');

const contactModel = {
    name: {
        type: String,
        required: "name is Required"
    },
    email: {
        type: String,
        required: "email is Required"
    },
    message: {
        type: String,
        required: "Content is Required"
    }
}

const contact_schema = new mongoose.Schema(contactModel, { timestamps: true });

module.exports = mongoose.model("Contact", contact_schema);