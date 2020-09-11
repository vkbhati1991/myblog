import React from 'react';

//import API from '../../../../api';
import getDateAndTime from '../../../../dateFormate';

const BlogDetailBanner = (props) => {
    return (
        <div className="blog-banner bt b--light-gray pv-30 bg-near-white">
            <div className="ui-container">
                <div className="grd-row">
                    <div className="grd-col-12">
                        <div className="banner--title f24 lh-copy mb-4 ff-bold tc">{props.title}</div>
                        <div className="blog-auth-detail mt-20 mid">
                            <div className="blog-card-author flex items-center secondary ph-16">
                                <span className="blog-comment-icon material-icons-outlined f20">perm_identity</span>
                                <span className="blog-comment-count f15 ph-8">{props.createdBy}</span>
                            </div>
                            <div className="blog-card-date flex items-center secondary ph-16">
                                <span className="blog-comment-icon material-icons-outlined f20">date_range</span>
                                <span className="blog-comment-count ph-8"> {getDateAndTime(props.createdAt)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogDetailBanner;