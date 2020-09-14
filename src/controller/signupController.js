const router = require("express").Router();
const pageType = require("../constant");
const getAppModel = require("../utils");

const mongoose = require("mongoose");
require("../model/User");
const User = mongoose.model("User");

const Cryptr = require('cryptr');
const cryptr = new Cryptr('myTotalySecretKey');

/**
 * Get Home Page
 */
router.get("/", async (req, res) => {
    const appModel = await getAppModel(pageType.REGISTER, null, true);
    res.render("index", { appModel });
});

router.post("/", async (req, res) => {
    const user = new User();
    const body = req.body;

    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.email = body.email;
    const encPassword = cryptr.encrypt(body.password);
    user.password = encPassword;
    user.role = body.role || "nonAdmin";

    await user.save();
    res.send({
        status: 200,
        message: "Record Create Successfull",
        elem: user
    });
});

module.exports = router;