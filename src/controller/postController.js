const router = require("express").Router();
const postDal = require("../dataAccessLayer/postDal");
const getAppModel = require("../utils");
const pageType = require("../constant");


/**
 * Get All Post data in Array form
 */
router.get("/", async (req, res) => {
    const posts = await postDal.getAllPosts();
    const appModel = getAppModel(pageType.POST_LIST, { postList: posts });
    res.render("index", { appModel });
});

/**
 * Get Single Post
 */
router.get("/:postId", async (req, res) => {
    const post = await postDal.getPost(req.params.postId);
    const appModel = getAppModel(pageType.POST_DETAIL, { post: post });
    res.render("index", { appModel });
});

router.get("/post/create_post", (req, res) => {
    const appModel = getAppModel(pageType.POST_CREATE, { post: null, edit: false });
    res.render("index", { appModel });
});

router.get("/:postId/edit_post", async (req, res) => {
    const post = await postDal.getPost(req.params.postId);
    const appModel = getAppModel(pageType.POST_CREATE, { post: post, edit: true });
    res.render("index", { appModel });
});

/**
 * Create Post
 * @requires Title
 * @requires Content
 */

router.post("/", async (req, res) => {
    const post = await postDal.createPost(req);
    res.send(post);
});

/**
 * Update/Edit Post
 */

router.put("/:postId", async (req, res) => {
    const postToBeUpdated = await postDal.updatePost(req.params.postId, req.body);
    res.send(postToBeUpdated);
});

/**
 * Delete Post
 */
router.delete("/:postId", async (req, res) => {
    const postToBeDeleted = await postDal.deletePost(req.params.postId);

    if (postToBeDeleted) {
        res.send({
            status: 200,
            message: "Record Deleted Successfully",
            record: postToBeDeleted
        });
    }

    res.send({
        status: 500,
        message: "Record not Deleted"
    });

});

module.exports = router;