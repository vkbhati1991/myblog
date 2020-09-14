const router = require("express").Router();
const pageType = require("../constant");
const getAppModel = require("../utils");

const mongoose = require("mongoose");
require("../model/Comment");
require("../model/Blog");
require("../model/Component");
require("../model/Reply");

const Blog = mongoose.model("Blog");
const Component = mongoose.model("Component");
const Comment = mongoose.model("Comment");
const Reply = mongoose.model("Reply");

/**
 * Get Home Page
 */
router.get("/", async (req, res) => {
    const blogList = await Blog.find({});
    const appModel = await getAppModel(pageType.BLOG, { blogList: blogList }, false, req.session);
    res.render("index", { appModel });
});

router.get("/:blogId", async (req, res) => {
    const blog = await Blog.findById({ _id: req.params.blogId });
    const blogList = await Blog.find({});
    const tags = await Component.find({}, { title: 1 });
    const blogComments = await Blog.findById({ _id: req.params.blogId }).populate("comments");

    const blogListArray = [];
    blogListArray.push(blogList[blogList.length - 1]);
    blogListArray.push(blogList[blogList.length - 2]);
    blogListArray.push(blogList[blogList.length - 3]);

    const relatedBlogList = blogList.filter(el => el.category === blog.category);
    
    const { comments } = blogComments;

    const tempCommentArray = [];
    for (const comment of comments) {
        const reply = await Comment.findById({ _id: comment._id }).populate("replies");
        tempCommentArray.push(reply);
    }

    blogComments.comments = tempCommentArray;

    const blogDetail = {
        blog: blog,
        blogList: relatedBlogList,
        recentPost: blogListArray,
        tags: tags,
        comments: blogComments.comments,
        session: req.session,
        searchList: blogList,
    }

    const appModel = await getAppModel(pageType.BLOG_DETAIL, blogDetail, false, req.session);
    res.render("index", { appModel });
});

router.post("/:blogId/comment", async (req, res) => {

    const blog = await Blog.findById({ _id: req.params.blogId });

    const comment = new Comment();
    comment.name = req.body.name;
    comment.email = req.body.email;
    comment.message = req.body.message;
    comment.blog = blog._id;

    await comment.save();

    blog.comments.push(comment._id);
    await blog.save();

    res.send({
        status: 200,
        message: "Record Create Successfull",
        elem: comment
    });
});

router.put("/comment/:commentId", async (req, res) => {
    const comment = await Comment.findByIdAndUpdate({ _id: req.params.commentId }, req.body, { new: true });

    res.send({
        status: 200,
        message: "Record Create Successfull",
        elem: comment
    });
});

router.delete("/comment/:commentId", async (req, res) => {
    const blogToBeDeleted = await Comment.findByIdAndRemove({ _id: req.params.commentId });

    if (blogToBeDeleted) {
        res.send({
            status: 200,
            message: "Record Deleted Successfully",
            elem: blogToBeDeleted
        });
    }

    res.send({
        status: 500,
        message: "Record not Deleted"
    });

});

router.post("/comment/:commentId/reply", async (req, res) => {
    const comment = await Comment.findById({ _id: req.params.commentId });

    const reply = new Reply();
    reply.name = req.body.name;
    reply.email = req.body.email;
    reply.message = req.body.message;
    reply.comment = comment._id;

    await reply.save();

    comment.replies.push(reply._id);
    await comment.save();

    res.send({
        status: 200,
        message: "Record Created Successfully",
        elem: reply
    });
});

module.exports = router;