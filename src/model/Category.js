const mongoose = require("mongoose");

const categoryModel = {
    title: {
        type: String,
        required: "Filed Required"
    }
}

const cat_schema = new mongoose.Schema(categoryModel);

module.exports =  mongoose.model("Category", cat_schema);