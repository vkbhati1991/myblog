import React from "react";

const BlogDetail = (props) => {

    function getBlogDetail() {

        const { pageModel } = props;

        if (!pageModel) return;

        const { post } = pageModel;

        if (!post) return;

        return (
            <div className="card mt-4">
                <div className="card-body">
                    <h1 className="card-title d-block">{post.title}</h1>
                    <h6 className="card-subtitle mb-2 text-muted">Created at: {post.createdAt},,, posted at: {post.updatedAt}</h6>
                    <p className="card-text"><div dangerouslySetInnerHTML={{ __html: post.content }}></div></p>

                    <div className="btn-group">
                        <a href={`/${post._id}/edit_post`} className="btn btn-primary">Edit</a>
                        <a href="/" className="btn btn-secondary">Back</a>
                    </div>

                </div>
            </div>
        );
    }

    return (
        <div className="blogDetail">
            <div className="container">
                {getBlogDetail()}
            </div>
        </div>
    );
};

export default BlogDetail;