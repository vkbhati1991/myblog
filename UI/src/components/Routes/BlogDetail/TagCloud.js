import React from 'react';

const tagList = (tags) => {
    return tags.map((t, i) => {
        return <a key={i} href={`/comp/${t._id}`} className="br4">{t.title}</a>;
    });

};

const TagCloud = (props) => {
    const { tags } = props;

    if (!tags || tags.length < 0) return null;

    return (
        <div className="blog-tag mt-30">
            <h2 className="ff-bold f18">Tags Cloud:</h2>
            <div className="blog-tag">
                <div className="blog-tag-row grd-row pt-16">
                    {tagList(tags)}
                </div>
            </div>
        </div>
    );
};

export default TagCloud;