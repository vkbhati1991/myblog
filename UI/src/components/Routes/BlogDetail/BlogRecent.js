import React from 'react';
import API from '../../../../api';
import getDateAndTime from '../../../../dateFormate';

const blogRecentList = (props) => {
    const { recentPost } = props;

    if (!recentPost || recentPost.length <= 0) return;

    return recentPost.map((blog, idx) => {
        return (
            <div key={idx} className="blog-recent-row flex items-center mt-12">
                <div className="blog-recent-img grd-col-3 br4 overflow-hidden">
                    <img className="br4" src={`${API.URL}/uploads/${blog.thumbImage}`} />
                </div>
                <div className="blog-recent-content ph-12 grd-col-9">
                    <a className="cat-label flex-1 primary  f15 db wt--100" href={`/blog/${blog._id}`}>{blog.title}</a>
                    <span className="catcount f14 db pt-4">{getDateAndTime(blog.createdAt)}</span>
                </div>
            </div>
        );
    });
};

const BlogRecent = (props) => {
    return (
        <div className="blog-recent mt-30">
            <h2 className="ff-bold f18">Recent Post:</h2>
            <div className="blog-recent">{blogRecentList(props)}</div>
        </div>
    );
};

export default BlogRecent;