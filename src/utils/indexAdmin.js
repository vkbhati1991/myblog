const getAdminModel = (pageType, pageModel, extraProps) => {
    const appMetaData = {
        isAdmin: true,
        adminHeader: {},
        adminBody: {
            pageType,
            pageModel,
            ...extraProps
        },
        adminFooter: {}
    }

    return JSON.stringify(appMetaData);
}

module.exports = getAdminModel;