const router = require("express").Router();
const pageType = require("../constantAdmin");
const getAdminModel = require("../utils/indexAdmin");
const mongoose = require("mongoose");
const upload = require("../dataAccessLayer/multer");

require("../model/Component");
const Component = mongoose.model("Component");

/**
 * Get Home Page
 */
router.get("/", async (req, res) => {
    const compList = await Component.find({});
    const appModel = getAdminModel(pageType.ADMIN_COMP, { compList: compList });

    res.render("index", { appModel });
});


router.get("/:compId", async (req, res) => {
    const comp = await Component.findById({ _id: req.params.compId });
    res.send(comp);
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


router.put("/:compId", upload.single("compimage"), async (req, res) => {

    const body = req.body;

    body.imageUrl = req.file && req.file.filename;
    body.linkurl = body.linkurl;

    const compToBeUpdated = await Component.findByIdAndUpdate({ _id: req.params.compId }, body, {
        new: true
    });
    

    await compToBeUpdated.save();

    res.send({
        status: 200,
        message: "Record Update Successfull",
        elem: compToBeUpdated
    });
});

/**
 * Delete Record
 */
router.delete("/:compId", async (req, res) => {
    const compToBeDeleted = await Component.findByIdAndRemove({ _id: req.params.compId });

    if (compToBeDeleted) {
        res.send({
            status: 200,
            message: "Record Deleted Successfully",
            record: compToBeDeleted
        });
    }

    res.send({
        status: 500,
        message: "Record not Deleted"
    });

});


module.exports = router;