const mongoose = require('mongoose');

const imageModel = {
    name: {
        type: String
    },
    imgUrl: {
        type: String
    }
}

const image_schema = new mongoose.Schema(imageModel);

module.exports = mongoose.model("Image", image_schema);