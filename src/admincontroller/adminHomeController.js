const router = require("express").Router();
const pageType = require("../constantAdmin");
const getAdminModel = require("../utils/indexAdmin");

/**
 * Get Home Page
 */
router.get("/", async (req, res) => {
    const appModel = getAdminModel(pageType.ADMIN_HOME);
    res.render("index", { appModel });
});

module.exports = router;