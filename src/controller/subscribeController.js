const router = require("express").Router();
const mongoose = require("mongoose");

require("../model/NewsLatter");
const NewsLatter = mongoose.model("NewsLatter");

/**
 * Get Home Page
 */
router.post("/", async (req, res) => {
    const newsLatter = new NewsLatter();
    const body = req.body;

    console.log(body)

    newsLatter.email = body.email;
    newsLatter.isActive = "true";

    await newsLatter.save();
    res.send({
        status: 200,
        message: "Record Create Successfull",
        elem: newsLatter
    });
});

module.exports = router;