const mongoose = require('mongoose');

const blogModel = {
    title: {
        type: String,
        required: "Field Required"
    },
    thumbImage: {
        type: String,
        required: "Field Required"
    },
    createdBy: {
        type: String,
        required: "Field Required"
    },
    content: {
        type: String,
        required: "Field Required"
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
            required: "Comment is Required"
        }
    ]
}

const blog_schema = new mongoose.Schema(blogModel, { timestamps: true });

module.exports = mongoose.model("Blog", blog_schema);