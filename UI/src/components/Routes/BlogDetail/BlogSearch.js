import React from 'react';
import BlogSearchBox from '../Blog/BlogSearchBox';

const BlogSearch = (props) => {
    const { searchList } = props;

    return (
        <div className="blog-deatil-content">
            <h2 className="ff-bold f18">Comments:</h2>
            <BlogSearchBox blogList={searchList} width={314} />
        </div>
    );
};

export default BlogSearch;