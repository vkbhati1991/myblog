import React from 'react';

const BlogLeft = (props) => {

    return (
        <div className="blogLeft f16 lh-copy ba b--light-gray pa-20 br10">
            <div dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
    );
};

export default BlogLeft;