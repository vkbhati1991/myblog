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
    const postComment = await postDal.getCommentsByPostId(req.params.postId);

    const { comments } = postComment;

    const tempCommentArray = [];
    for (const comment of comments) {
        const reply = await postDal.getReplyByCommentId(comment._id);
        tempCommentArray.push(reply);
    }

    postComment.comments = tempCommentArray;

    const appModel = getAppModel(pageType.POST_DETAIL, { post: post, postComment: postComment });
    res.render("index", { appModel });
});

router.get("/new/create_post", (req, res) => {
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

router.post("/:postId/comment", async (req, res) => {
    const comment = await postDal.crateCommnetById(req.params.postId, req.body.content);

    res.send(comment);
});

router.get("/:postId/comment", async (req, res) => {
    const post = await postDal.getCommentsByPostId(req.params.postId);

    res.send(post);
});

router.get("/comment/:commentId", async (req, res) => {
    const comment = await postDal.getComment(req.params.commentId);
    res.send(comment);
});

router.put("/comment/:commentId", async (req, res) => {

    const comment = await postDal.commentUpdateById(req.params.commentId, req.body);
    res.send(comment);
});

router.get("/comment/:commentId/reply", async (req, res) => {
    const reply = await postDal.getReplyByCommentId(req.params.commentId);

    res.send(reply);
});

router.get("/reply/:replyId", async (req, res) => {
    const reply = await postDal.getReply(req.params.replyId);

    res.send(reply);
});

router.put("/reply/:replyId", async (req, res) => {
    const reply = await postDal.updateReply(req.params.replyId, req.body);

    res.send(reply);
});

router.post("/comment/:commentId/reply", async (req, res) => {
    const reply = await postDal.crateReplyById(req.params.commentId, req.body.content);

    res.send(reply);
});

module.exports = router;