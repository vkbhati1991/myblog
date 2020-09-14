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
    const appModel = await getAppModel(pageType.LOGIN, null, true);
    res.render("index", { appModel });
});

router.post("/", async (req, res) => {

    const user = await User.findOne({ email: req.body.email });
    const userinfo = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.email
    }

    if (!user) {
        res.send({
            status: 500,
            message: "Email Not Exist"
        });
    }

    const decryptpassword = cryptr.decrypt(user.password);

    console.log(decryptpassword)

    if (decryptpassword != req.body.password) {
        res.send({
            status: 500,
            message: "Invalid Password"
        });
    }

    if ((req.body.email === user.email) && (req.body.password === decryptpassword)) {
        req.session.isLoggedIn = true;
        req.session.user = userinfo;
        const hour = 3600000
        req.session.cookie.expires = new Date(Date.now() + hour)
        req.session.cookie.maxAge = 100 * hour
        res.send({
            status: 200,
            redirect: "/admin/blog"
        });
    }

});

router.get("/logout", async (req, res) => {
    req.session = null;
    res.send({
        status: 200,
        redirect: "/"
    });

});

module.exports = router;