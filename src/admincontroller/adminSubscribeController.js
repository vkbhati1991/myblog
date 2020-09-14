const router = require("express").Router();
const pageType = require("../constantAdmin");
const getAdminModel = require("../utils/indexAdmin");
const mongoose = require("mongoose");

require("../model/NewsLatter");
const NewsLatter = mongoose.model("NewsLatter");
const isAuth = require("../middleware/is-auth");
/**
 * Get Home Page
 */
router.get("/", isAuth, async (req, res) => {
    const emailList = await NewsLatter.find({});
    const appModel = getAdminModel(pageType.ADMIN_SUBSCRIBE, { emailList: emailList });
    res.render("index", { appModel });
});

module.exports = router;