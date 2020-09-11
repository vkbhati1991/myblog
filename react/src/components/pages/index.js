import BlogDetail from "../blog/BlogDetail";
import BlogList from "../blog/bloglist";
import BlogNew from "../blog/BlogNew";
import ImageUpload from "../image/Image";
import ImageList from "../image/ImageList";

const { pageTypes } = require("../../Constatnt");

const getComponent = (props) => {
    switch (props.pageType) {
        case pageTypes.POST_LIST:
            return <BlogList {...props} />;
        case pageTypes.POST_DETAIL:
            return <BlogDetail {...props} />;
        case pageTypes.POST_CREATE:
            return <BlogNew {...props} />;
        case pageTypes.UPLOAD_IMAGE:
            return <ImageUpload {...props} />;
        case pageTypes.BROWSE_IMAGE:
            return <ImageList {...props} />;
        default:
            return <BlogList {...props} />;
    }
};

export default getComponent;