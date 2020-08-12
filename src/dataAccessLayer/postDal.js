require("../model/Post");
require("../model/Comment");

const mongoose = require("mongoose");

const Post = mongoose.model("Post");
const Comment = mongoose.model("Comment");

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
    }
}

module.exports = postDal;