/* eslint-disable*/
import AdminHome from './AdminHome/index';
import { pageTypes } from './AdminConstant';
import AdminComp from './AdminComp';
import AdminBlog from './AdminBlog';
import CreateBlog from './AdminBlog/CreateBlog';
import BrowseImage from './AdminBlog/BrowseImage';
import AdminSubscribe from './AdminSubscribe';

const getAdminComponent = (props) => {
    switch (props.pageType) {
        case pageTypes.ADMIN_HOME:
            return <AdminHome {...props} />;
        case pageTypes.ADMIN_COMP:
            return <AdminComp {...props} />;
        case pageTypes.ADMIN_BLOG:
            return <AdminBlog {...props} />;
        case pageTypes.ADMIN_NEW:
            return <CreateBlog {...props} />;
        case pageTypes.ADMIN_BROWSE_IMAGE:
            return <BrowseImage {...props} />;
        case pageTypes.ADMIN_SUBSCRIBE:
            return <AdminSubscribe {...props} />;
        default:
            return <AdminHome {...props} />;
    }
};

export default getAdminComponent;
