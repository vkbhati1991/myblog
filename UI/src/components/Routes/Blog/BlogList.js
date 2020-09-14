import React from 'react';
import API from '../../../../api';
import getDateAndTime from '../../../../dateFormate';

const blogListItem = (props) => {

    const { pageModel } = props;

    if (!pageModel) return;

    const { blogList } = pageModel;

    if (!blogList || blogList.length <= 0) return;

    return blogList.map((blog, idx) => {
        const commentLength = blog && blog.comments.length;

        return (
            <div className="grd-col-md-4 pa-12" key={idx}>
                <div className="blog-card br10 bg-white wt--100 trans-3 ba b--moon-gray">
                    <a href={`/blog/${blog._id}`} className="blog-card-img br10 overflow-hidden"><span className="dn">img</span><img src={`${API.URL}/uploads/${blog.thumbImage}`} /></a>
                    <div className="blog-card-content pa-24">
                        <a href={`/blog/${blog._id}`} className="blog-card-title ff-medium f20 pointer db lh-title primary">{blog.title}</a>
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
                            <a href={`/blog/${blog._id}`} className="readmore-card-author mt-12 secondary">Read More</a>
                        </div>
                    </div>

                </div>
            </div>
        );
    });

};

const BlogList = (props) => {
    return (
        <section className="section pv-12">
            <div className="ui-container">
                <div className="blogListing">
                    <div className="grd-row">
                        {blogListItem(props)}
                    </div>

                    <div className="mid pv-30 dn">
                        <div className="button-group pagination-ui">
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">Prev</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">First</a>
                            <a className="button button--large button--brand f16 b--light-gray" href="#/" role="button">1</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">2</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">3</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">4</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">Last</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">Next</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogList;