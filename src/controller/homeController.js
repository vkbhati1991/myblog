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
            desc: "The uiSolution is one of the best platform for the ‘UI developers or Client side developers’. We help you to provide the variety of solutions related to UI/UX like React, ES6, Javascript, Vue js, Angular js, Webapck, HTML, CSS, SCSS...etc..."

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
            desc: "The uiSolution is one of the best platform for the ‘UI developers or Client side developers’. We help you to provide the variety of solutions related to UI/UX like React, ES6, Javascript, Vue js, Angular js, Webapck, HTML, CSS, SCSS...etc...",
            blogList: blogList
        }

    }
   
    const appModel = await getAppModel(pageType.HOME, homeModel, false, req.session);

    res.render("index", { appModel });
});

module.exports = router;