const router = require("express").Router();
const getAppModel = require("../utils");
const pageType = require("../constant");
const mongoose = require("mongoose");
require("../model/Image");
const upload = require("../dataAccessLayer/multer");
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({ uploadDir: './public/uploads/' });

const Image = mongoose.model("Image");

router.get("/upload", (req, res) => {
    const appModel = getAppModel(pageType.UPLOAD_IMAGE, null, false, req.session);
    res.render("index", { appModel });
});

router.get("/browse", async (req, res) => {
    const imageList = await Image.find({});
    const appModel = getAppModel(pageType.BROWSE_IMAGE, { imageList: imageList }, true, req.session);
    res.render("index", { appModel });
});

router.post("/upload", upload.single("image"), async (req, res) => {
    const image = new Image();
    image.name = req.file.originalname;
    image.imgUrl = req.file.path;
    image.filename = req.file.filename;
    await image.save();

    res.send(req.file);
});

function getFileName(str){
    return str.slice(15);
}

router.post("/uploadfromEditor", multipartMiddleware, async (req, res) => {

    const file = req.files.upload;
    const image = new Image();
    image.name = file.originalname;
    image.imgUrl = file.path;
    image.filename = getFileName(file.path);
    await image.save();
});

module.exports = router;