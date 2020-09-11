require("../model/Post");
require("../model/Comment");
require("../model/Reply");

const mongoose = require("mongoose");

const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment");
const Reply = mongoose.model("Reply");

const postDal = {

    getAllPosts: async () => {
        return await Post.find({});
    },

    getPost: async (id) => {
        const post = await Post.findById({ _id: id });

        if (post) {
            return post;
        }

        return null;
    },

    createPost: async (req) => {
        const post = new Post();
        post.title = req.body.title;
        post.content = req.body.content;
        await post.save();

        return post;
    },

    updatePost: async (id, updatedPost) => {
        const post = await Post.findByIdAndUpdate({
            _id: id
        }, updatedPost, {
            new: true,
            runValidators: true
        });

        await post.save();

        return post;
    },

    deletePost: async (id) => {
        const post = await Post.findByIdAndRemove({ _id: id });

        return post;
    },

    getComment: async (id) => {
        const comment = await Comment.findById({ _id: id });

        if (comment) {
            return comment;
        }

        return null;
    },

    getCommentsByPostId: async (id) => {
        return await Post.findById({ _id: id }).populate("comments");
    },

    crateCommnetById: async (id, content) => {
        const post = await Post.findById({ _id: id });

        const comment = new Comment();
        comment.content = content;
        comment.userName = "Vinod Singh";
        comment.imageUrl = "vinod.png";
        comment.post = post._id;

        await comment.save();

        post.comments.push(comment._id);
        await post.save();

        return comment;
    },
    commentUpdateById: async (id, body) => {
        return await Comment.findByIdAndUpdate({ _id: id }, body, { new: true });
    },
    crateReplyById: async (commentId, content) => {
        const comment = await Comment.findById({ _id: commentId });

        const reply = new Reply();
        reply.content = content;
        reply.userName = "Vinod Singh";
        reply.imageUrl = "vinod.png";
        reply.comment = comment._id;

        await reply.save();

        comment.replies.push(reply._id);
        await comment.save();

        return reply;
    },
    getReplyByCommentId: async (id) => {
        return await Comment.findById({ _id: id }).populate("replies");;
    },


    getReply: async (id) => {
        const reply = await Reply.findById({ _id: id });

        if (reply) {
            return reply;
        }

        return null;
    },
    updateReply: async (id, updatedReply) => {
        const reply = await Reply.findByIdAndUpdate({
            _id: id
        }, updatedReply, {
            new: true,
            runValidators: true
        });

        await reply.save();

        return reply;
    }
}

module.exports = postDal;