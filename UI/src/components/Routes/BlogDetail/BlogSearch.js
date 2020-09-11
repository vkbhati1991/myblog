import React from 'react';

const BlogSearch = () => {
    return (
        <div className="blog-deatil-content">
            <h2 className="ff-bold f18">Comments:</h2>
            <div className="searchBlog wt--100 ht-3 bg-white br6 ba b--light-gray flex items-center">
                <input placeholder="Search Keywords..." type="text" className="blgSearch br10 ht40 bg-transparent ph-16 f16 primary bn flex-1" />
                <span className="material-icons-outlined ph-16 f20 secondary pointer">
                    search
                 </span>
            </div>
        </div>
    );
};

export default BlogSearch;