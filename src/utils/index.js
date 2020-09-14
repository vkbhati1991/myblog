const mongoose = require("mongoose");
require("../model/Component");
const Component = mongoose.model("Component");

const getNavList = async () => {
    return await Component.find({}, { title: 1 });
} 

const footer = {
    about: {
        desc: "Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect."
    }
}

const getAppModel = async (pageType, pageModel, isHeaderFooter, session, extraProps) => {
    const appMetaData = {
        appHeader: {
            nav: {
                component: await getNavList()
            },
            userInfo: session
        },
        appBody: {
            pageType,
            pageModel,
            isHeaderFooter: isHeaderFooter || false,
            ...extraProps
        },
        appFooter: {
            about: footer && footer.about,
        }
    }

    return JSON.stringify(appMetaData);
}

module.exports = getAppModel;