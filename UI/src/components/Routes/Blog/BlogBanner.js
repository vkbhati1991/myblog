import React from 'react';

const BlogBanner = () => {
    return (
        <div className="blog-banner bt b--light-gray pv-30 bg-near-white">
            <div className="ui-container">
                <div className="grd-row">
                    <div className="grd-col-12">
                        <div className="banner--title f24 lh-copy mb-4 ff-bold tc">Blog Listing</div>
                        <div className="searchBlog max--wt-50 wt--100 ht-3 bg-white br10 ba b--light-gray flex items-center">
                            <input placeholder="Search Blog..." type="text" className="blgSearch br10 ht40 bg-transparent ph-16 f16 primary bn flex-1" />
                            <span className="material-icons-outlined ph-16 f20 secondary pointer">
                                search
                                </span>
                        </div>
                        <a href="#/" className="bredcrum f14 brand ff-medium db tc">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;