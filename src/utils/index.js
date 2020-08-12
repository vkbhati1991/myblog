const getAppModel = (pageType, pageModel) => {
    const appMetaData = { pageType, pageModel }

    return JSON.stringify(appMetaData);
}

module.exports = getAppModel;