const router = require("express").Router();
const categoryDal = require("../dataAccessLayer/categoryDal");
const getAppModel = require("../utils");
const pageType = require("../constant");

/**
 * Get All  data in Array form
 */
router.get("/", async (req, res) => {
    const categories = await categoryDal.getAllCategory();
    const appModel = getAppModel(pageType.CATEGORY_LIST, { categoryList: categories });
    //res.render("index", { appModel });

    res.send(categories);
});

router.get("/create_category", (req, res) => {
    const appModel = getAppModel(pageType.CATEGORY_CREATE, { category: null, edit: false });
    res.render("index", { appModel });
});

router.get("/:catId/edit_post", async (req, res) => {
    const category = await categoryDal.getCategory(req.params.catId);
    const appModel = getAppModel(pageType.CATEGORY_CREATE, { category: category, edit: true });
    res.render("index", { appModel });
});

/**
 * Create Record
 * @requires Title
 * @requires Content
 */

router.post("/create_category", async (req, res) => {
    const category = await categoryDal.createCategory(req);
    res.send(category);
});

/**
 * Update/Edit Record
 */

router.put("/:catId", async (req, res) => {
    const categoryToBeUpdated = await categoryDal.updateCategory(req.params.catId, req.body);
    res.send(categoryToBeUpdated);
});

/**
 * Delete Record
 */
router.delete("/:catId", async (req, res) => {
    const catToBeDeleted = await categoryDal.deleteCategory(req.params.catId);

    if (catToBeDeleted) {
        res.send({
            status: 200,
            message: "Record Deleted Successfully",
            record: catToBeDeleted
        });
    }

    res.send({
        status: 500,
        message: "Record not Deleted"
    });

});

module.exports = router;