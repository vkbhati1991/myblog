const mongoose = require('mongoose');

const postModel = {
    title: {
        type: String,
        required: "Title is Required"
    },
    content: {
        type: String,
        required: "Content is Required"
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comment",
            required: "Comment is Required"
        }
    ]
}

const post_schema = new mongoose.Schema(postModel, { timestamps: true });

module.exports = mongoose.model("Post", post_schema);