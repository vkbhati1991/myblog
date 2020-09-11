const router = require("express").Router();
const pageType = require("../constant");
const getAppModel = require("../utils");

const mongoose = require("mongoose");

require("../model/Blog");
const Blog = mongoose.model("Blog");

require("../model/Component");
const Component = mongoose.model("Component");

/**
 * Get Home Page
 */
router.get("/", async (req, res) => {
    const blogList = await Blog.find({});
    const appModel = await getAppModel(pageType.BLOG, { blogList: blogList });
    res.render("index", { appModel });
});

router.get("/:blogId", async (req, res) => {
    const blog = await Blog.findById({ _id: req.params.blogId });
    const blogList = await Blog.find({}).limit(2);
    const recentPost = await Blog.find({}).limit(3);
    const tags = await Component.find({}, { title: 1 });

    const blogDetail = {
        blog: blog,
        blogList: blogList,
        recentPost: recentPost,
        tags: tags
    }

    const appModel = await getAppModel(pageType.BLOG_DETAIL, blogDetail);
    res.render("index", { appModel });
});

module.exports = router;