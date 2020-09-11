const router = require("express").Router();
const pageType = require("../constant");
const getAppModel = require("../utils");
const mongoose = require("mongoose");

require("../model/Component");
require("../model/Blog");
const Blog = mongoose.model("Blog");
const Component = mongoose.model("Component");

/**
 * Get Home Page
 */
router.get("/", async (req, res) => {

    const blogList = await Blog.find({}).limit(3);
    const compList = await Component.find({}).limit(8);

    const homeModel = {
        banner: {
            head: "Our Creative Work is Your",
            head2: "Success",
            desc: "Launch your campaign and benefit from our expertise on designing and managing conversion centered bootstrap4 html page."

        },
        comp: {
            head: "Get Solution By Technology",
            desc: "Here You can get developed component and use in the application by clicking the below options according to your app requirement.",
            compList: compList
        },
        howItWork: {
            head: "How do we works ?",
            desc: "Here You can get developed component and use in the application by clicking the below options according to your app requirement."
        },
        blog: {
            head: "Learn Our Latest Component & Blog",
            desc: "Here You can get developed component and use in the application by clicking the below options according to your app requirement.",
            blogList: blogList
        }

    }
   
    const appModel = await getAppModel(pageType.HOME, homeModel, false);

    res.render("index", { appModel });
});

module.exports = router;