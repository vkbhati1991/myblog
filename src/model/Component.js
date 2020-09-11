const mongoose = require("mongoose");

const componentModel = {
    title: {
        type: String,
        required: "Filed Required"
    },
    desc: {
        type: String,
        required: "Filed Required"
    },
    imageUrl: {
        type: String,
        required: "Filed Required"
    }
}

const component_schema = new mongoose.Schema(componentModel);

module.exports =  mongoose.model("Component", component_schema);