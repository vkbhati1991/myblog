const mongoose = require('mongoose');

const commentModel = {

    content: {
        type: String,
        required: "Content is Required"
    },
    post: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post",
        required: "Post is Required Field"
    }
}

const comment_schema = new mongoose.Schema(commentModel, { timestamps: true });

module.exports = mongoose.model("Comment", comment_schema);