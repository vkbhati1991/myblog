const mongoose = require('mongoose');

const commentModel = {
    userName: String,
    imageUrl: String,
    content: {
        type: String,
        required: "Content is Required"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: "Post is Required Field"
    },
    replies:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Reply",
            required: "Comment is Required Field"
        }
    ]
}

const comment_schema = new mongoose.Schema(commentModel, { timestamps: true });

module.exports = mongoose.model("Comment", comment_schema);