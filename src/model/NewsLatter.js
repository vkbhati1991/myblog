const mongoose = require('mongoose');

const newsModel = {
    email: {
        type: String,
        required: "Field Required"
    },
    isActive:{
        type: String
    }
}

const news_schema = new mongoose.Schema(newsModel, { timestamps: true });

module.exports = mongoose.model("NewsLatter", news_schema);