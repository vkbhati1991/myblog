import React from 'react';

const BlogCategory = () => {
    return (
        <div className="blog-deatil-cat mt-30">
            <h2 className="ff-bold f18">Catagories:</h2>
            <div className="blog-cat">
                <div className="blog-cat-row flex items-center mt-12">
                    <a className="cat-label flex-1 primary ff-medium f15" href="#/">Finance</a>
                    <span className="catcount">23</span>
                </div>
                <div className="blog-cat-row flex items-center mt-12">
                    <a className="cat-label flex-1 primary ff-medium f15" href="#/">Business</a>
                    <span className="catcount">123</span>
                </div>
                <div className="blog-cat-row flex items-center mt-12">
                    <a className="cat-label flex-1 primary ff-medium f15" href="#/">Blog</a>
                    <span className="catcount">243</span>
                </div>
                <div className="blog-cat-row flex items-center mt-12">
                    <a className="cat-label flex-1 primary ff-medium f15" href="#/">Corporate</a>
                    <span className="catcount">233</span>
                </div>
            </div>
        </div>
    );
};

export default BlogCategory;