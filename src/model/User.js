const mongoose = require('mongoose');

const userModel = {
    firstName: {
        type: String,
        required: "FirstName is Required"
    },
    lastName: {
        type: String,
        required: "Field is Required"
    },
    email:{
        type: String,
        required: "Field is Required"
    },
    password:{
        type: String,
        required: "Field is Required"
    },
    role:{
        type: String,
        required: "Field is Required"
    }
}

const user_schema = new mongoose.Schema(userModel, { timestamps: true });

module.exports = mongoose.model("User", user_schema);