const router = require("express").Router();
const pageType = require("../constantAdmin");
const getAdminModel = require("../utils/indexAdmin");
const mongoose = require("mongoose");

require("../model/Blog");
require("../model/Image");
require("../model/Component");

const Image = mongoose.model("Image");
const Blog = mongoose.model("Blog");
const Component = mongoose.model("Component");

const upload = require("../dataAccessLayer/multer");
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './public/uploads/' });

const isAuth = require("../middleware/is-auth");

function getFileName(str) {
    return str.slice(15);
}

/**
 * Get Home Page
 */
router.get("/", isAuth, async (req, res) => {
    const blogList = await Blog.find({});
    const appModel = getAdminModel(pageType.ADMIN_BLOG, { blogList: blogList });
    res.render("index", { appModel });
});

router.get("/new", isAuth, async (req, res) => {
    const categoryList = await Component.find({}, { title: 1 });
    const appModel = getAdminModel(pageType.ADMIN_NEW, { blog: null, categoryList: categoryList, edit: false });
    res.render("index", { appModel });
});

router.get("/edit/:blogId", isAuth, async (req, res) => {
    const categoryList = await Component.find({}, { title: 1 });
    const currentBlog = await Blog.findById({ _id: req.params.blogId });
    const appModel = getAdminModel(pageType.ADMIN_NEW, { blog: currentBlog, categoryList: categoryList, edit: true });
    res.render("index", { appModel });
});

router.post("/", upload.single("thumbImage"), async (req, res) => {

    const blog = new Blog();
    blog.thumbImage = req.file && req.file.filename;
    blog.title = req.body.title;
    blog.createdBy = req.body.createdBy;
    blog.category = req.body.category;
    blog.content = req.body.content;
    await blog.save();

    res.send({
        status: 200,
        message: "Record Create Successfull",
        elem: blog
    });
});

router.put("/:blogId", upload.single("thumbImage"), async (req, res) => {

    const currentBlog = await Blog.findById({ _id: req.params.blogId });
    const body = req.body;
    if (req.file) {
        body.thumbImage = req.file && req.file.filename;
    } else {
        body.thumbImage = currentBlog.thumbImage;
    }
    const blogToBeUpdated = await Blog.findByIdAndUpdate({ _id: req.params.blogId }, body, {
        new: true
    });

    await blogToBeUpdated.save();

    res.send({
        status: 200,
        message: "Record Create Successfull",
        elem: blogToBeUpdated
    });
});

function getFileName(str) {
    return str.slice(15);
}

router.get("/browse/images", isAuth, async (req, res) => {
    const imageList = await Image.find({});
    const appModel = getAdminModel(pageType.ADMIN_BROWSE_IMAGE, { imageList: imageList });
    res.render("index", { appModel });
});

router.post("/uploadfromEditor", multipartMiddleware, async (req, res) => {

    const file = req.files.upload;
    const image = new Image();
    image.name = file.originalname;
    image.imgUrl = file.path;
    image.filename = getFileName(file.path);
    await image.save();
});

module.exports = router;