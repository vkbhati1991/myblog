const router = require("express").Router();
const pageType = require("../constant");
const mongoose = require("mongoose");
const getAppModel = require("../utils");
const upload = require("../dataAccessLayer/multer");

require("../model/Component");
const Component = mongoose.model("Component");

function getCompList(list) {
    return {
        heading: "Get Component By Technology...",
        desc: "Here You can get developed component and use in the application by clicking the below options according to your app requirement.",
        pagination: list && list.length >= 12,
        componentList: list
    };
};

/**
 * Get Home Page
 */
router.get("/", async (req, res) => {
    const compList = await Component.find({});
    const appModel = await getAppModel(pageType.COMPONENT, getCompList(compList), false, req.session);
    res.render("index", { appModel });
});

router.get("/:compId", async (req, res) => {
    const comp = await Component.findById({ _id: req.params.compId });
    const compObj = {
        component: comp,
        componentTut: [],
        cataegory: [],
        tag: []
    }
    const appModel = await getAppModel(pageType.COMPONENT_DETAIL, compObj, false, req.session);
    res.render("index", { appModel });
});

router.post("/", upload.single("compimage"), async (req, res) => {
    const component = new Component();
    const body = req.body;

    component.title = body.title;
    component.desc = body.desc;
    component.imageUrl = req.file && req.file.filename;
    component.linkurl = body.linkurl;

    await component.save();

    res.send({
        status: 200,
        message: "Record Create Successfull",
        elem: component
    });

});


module.exports = router;