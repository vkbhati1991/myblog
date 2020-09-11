const mongoose = require('mongoose');

const replyModel = {
    userName: String,
    imageUrl: String,
    content: {
        type: String,
        required: "Content is Required"
    },
    comment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Comment",
        required: "Comment is Required Field"
    }
}

const reply_schema = new mongoose.Schema(replyModel, { timestamps: true });

module.exports = mongoose.model("Reply", reply_schema);