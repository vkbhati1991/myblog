import React from 'react';
import API from '../../../api';
import getDateAndTime from '../../../dateFormate';

const blogList = (props) => {
    const { pageModel } = props;

    if (!pageModel) return;

    const { blogList } = pageModel;

    if (!blogList || blogList.length <= 0) return;

    return blogList.map((blog, idx) => {
        const commentLength = blog && blog.comments.length;

        return (
            <div className="grd-col-md-4 pa-12" key={idx}>
                <div className="blog-card br10 bg-white wt--100 trans-3 ba b--moon-gray">
                    <div className="blog-card-img br10 overflow-hidden"><img src={`${API.URL}/uploads/${blog.thumbImage}`} /></div>
                    <div className="blog-card-content pa-24">
                        <a href="/#" className="blog-card-title ff-medium f20 pointer db lh-title primary">{blog.title}</a>
                        <div className="blog-card-author flex items-center secondary mt-12">
                            <span className="blog-comment-icon material-icons-outlined f20">perm_identity</span>
                            <span className="blog-comment-count f15 ph-8">{blog.createdBy}</span>
                        </div>
                        <div className="blog-card-date flex items-center secondary mt-12">
                            <span className="blog-comment-icon material-icons-outlined f20">date_range</span>
                            <span className="blog-comment-count ph-8">{getDateAndTime(blog.createdAt)}</span>
                        </div>
                        <div className="readmore-and-like flex items-center">
                            <div className="blog-card-like flex items-center flex-1 mt-16">
                                <div className="blog-like secondary flex items-center">
                                    <span className="blog-like-icon material-icons-outlined f20">thumb_up</span>
                                    <span className="blog-like-count ph-8">{commentLength}</span>
                                </div>
                                <div className="blog-comment flex items-center secondary">
                                    <span className="blog-comment-icon material-icons-outlined f20">chat_bubble_outline</span>
                                    <span className="blog-comment-count ph-8">{commentLength}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mid pa-8">
                        <a href={`/admin/blog/edit/${blog._id}`} className="button button-sm button--brand mh-8">Edit</a>
                        <a className="button button-sm button--brand mh-8">Delete</a>
                    </div>

                </div>
            </div>
        );
    });

};

const AdminBlog = (props) => {
    return (
        <div>
            <div className="admin-blog-list-header flex items-center mb-20">
                <div className="admin-comp-list-title flex-1 f20 ff-bold">Blog List</div>
                <a href="/admin/blog//new" className="button button--danger">Create Blog</a>
            </div>
            <div className="blog-row grd-row">
                {blogList(props)}
            </div>
        </div>
    );
};

export default AdminBlog;