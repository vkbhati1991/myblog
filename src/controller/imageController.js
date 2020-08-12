const router = require("express").Router();
const getAppModel = require("../utils");
const pageType = require("../constant");
const mongoose = require("mongoose");
require("../model/Image");
const upload = require("../dataAccessLayer/multer");

const Image = mongoose.model("Image");

router.get("/upload", (req, res) => {
    const appModel = getAppModel(pageType.UPLOAD_IMAGE);
    res.render("image", { appModel });
});

router.post("/upload", upload.single("image"), async (req, res) => {
    // const image = new Image();
    // image.name = req.file.originalname;
    // image.imgUrl = req.file.path;
    // await image.save();
    res.send(req.file);
});

module.exports = router;