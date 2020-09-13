const mongoose = require('mongoose');

const commentModel = {
    name: String,
    email: String,
    message: {
        type: String,
        required: "Content is Required"
    },
    blog: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Blog",
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