import React from 'react';
import BlogBanner from './BlogBanner';
import BlogList from './BlogList';

const Blog = (props) => {
    return (
        <div className="blog-content">
            <BlogBanner {...props} />
            <BlogList {...props} />
        </div>
    );
};

export default Blog;