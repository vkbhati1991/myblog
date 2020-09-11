const mongoose = require("mongoose");

const artistModel = {
    fullName: {
        type: String,
        required: "Filed Required"
    },
    email: {
        type: String
    },
    mobile: {
        type: String
    },
    imageUrl: {
        type: String,
        required: "Filed Required"
    },
    dob: {
        type: String
    },
    speciality: {
        type: String
    },
    website: {
        type: String
    },
    address: {
        type: String
    },
    aboutus: {
        type: String
    }
}

const artist_schema = new mongoose.Schema(artistModel);

module.exports =  mongoose.model("Artist", artist_schema);