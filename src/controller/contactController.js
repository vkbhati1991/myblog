const router = require("express").Router();
const pageType = require("../constant");
const mongoose = require("mongoose");
const getAppModel = require("../utils");

require("../model/Contact");
const Contact = mongoose.model("Contact");

router.get("/", async (req, res) => {
    const appModel = await getAppModel(pageType.CONTACT, null, false, req.session);
    res.render("index", { appModel });
});

router.post("/", async (req, res) => {

    const contact = new Contact();

    const body = req.body;

    contact.name = body.name;
    contact.email = body.email;
    contact.message = body.message;

    await contact.save();

    res.send({
        status: 200,
        message: "Thanks for the contact us!!",
        elem: contact
    });

});


module.exports = router;