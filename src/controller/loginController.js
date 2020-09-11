const router = require("express").Router();
const pageType = require("../constant");
const getAppModel = require("../utils");

/**
 * Get Home Page
 */
router.get("/", async (req, res) => {
    const appModel =await  getAppModel(pageType.LOGIN, null, true);
    res.render("index", { appModel });
});

module.exports = router;