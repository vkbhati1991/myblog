import React from 'react';
import API from '../../../../api';
import getDateAndTime from '../../../../dateFormate';

const blogListing = (props) => {
    const { blogList } = props;

    if (!blogList || blogList.length <= 0) return;

    return blogList.map((blog, idx) => {
        const commentLength = blog && blog.comments.length;

        return (
            <div className="grd-col-md-4 pa-12" key={idx}>
                <div className="blog-card br10 bg-white wt--100 trans-3 ba b--moon-gray">
                    <a href={`/blog/${blog._id}`} className="blog-card-img br10 overflow-hidden"><span className="db">blog</span><img src={`${API.URL}/uploads/${blog.thumbImage}`} /></a>
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

const BlogSection = (props) => {
    return (
        <section className="section pv-60 bg-near-white">
            <div className="ui-container-flex items-center">
                <div className="grd-col-md-6">
                    <div className="brand f16 ff-medium">Blog</div>
                    <h2 className="section-title f30 ff-medium pb-24 primary pt-16 max-wt-20 lh-copy">{props.head}</h2>
                </div>
                <div className="section-desc lh-copy secondary grd-col-md-6">{props.desc}</div>
            </div>

            <div className="ui-container">
                <div className="blogListing">
                    <div className="grd-row">
                        {blogListing(props)}
                    </div>

                    <div className="mid pt-30">
                        <a href="/blog" className="button button--brand ttc ff-medium mh-16 f15 h-auto pv-12 ph-16 mid">
                            See More Related Blogs
                            <svg xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="wt16 ht16 mh-8"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></a></div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;