import React from 'react';

const blogCatList = (props) => {

    const { category } = props;

    if (!category || category.length <= 0) return;

    return category.map((c, idx) => {
        return (
            <div key={idx} className="blog-cat-row flex items-center mt-12">
                <span className="cat-label flex-1 primary ff-medium f15">{c.label}</span>
                <span className="catcount">{c.value}</span>
            </div>
        );
    });
};

const BlogCategory = (props) => {
    return (
        <div className="blog-deatil-cat mt-30">
            <h2 className="ff-bold f18">Catagories:</h2>
            <div className="blog-cat">
                {blogCatList(props)}
            </div>
        </div>
    );
};

export default BlogCategory;