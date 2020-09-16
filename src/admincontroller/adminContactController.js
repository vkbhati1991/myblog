const router = require("express").Router();
const pageType = require("../constantAdmin");
const getAdminModel = require("../utils/indexAdmin");
const mongoose = require("mongoose");

require("../model/Contact");

const Contact = mongoose.model("Contact");
const isAuth = require("../middleware/is-auth");
/**
 * Get Home Page
 */
router.get("/", isAuth, async (req, res) => {
    const contactList = await Contact.find({});
    const appModel = getAdminModel(pageType.ADMIN_CONTACT, { contactList: contactList });
    res.render("index", { appModel });
});

module.exports = router;