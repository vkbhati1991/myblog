import React from 'react';
import BlogSearchBox from './BlogSearchBox';

const BlogBanner = (props) => {

    const { pageModel } = props;

    if (!pageModel) return;

    const { blogList } = pageModel;

    if (!blogList || blogList.length <= 0) return;

    return (
        <div className="blog-banner bt b--light-gray pv-30 bg-near-white">
            <div className="ui-container">
                <div className="grd-row">
                    <div className="grd-col-12">
                        <div className="banner--title f24 lh-copy mb-4 ff-bold tc">Blog Listing</div>
                        {<BlogSearchBox blogList={blogList} width={600}/>}
                        <a href="/" className="bredcrum f14 brand ff-medium db tc">Back to Home</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogBanner;