import React from "react";

const BlogList = (props) => {

    function getBlogList() {
        const { pageModel } = props;

        if (!pageModel) return;

        if (!pageModel.postList || pageModel.postList.length <= 0) {
            return null;
        }

        return pageModel.postList.map((post, idx) => {
            return (
                <tr key={idx}>
                    <td><a href={`/${post._id}`} className="d-block">{post._id}</a></td>
                    <td><a href={`/${post._id}`} className="d-block truncate max-wt-20">{post.title}</a></td>
                    <td>{post.createdAt}</td>
                    <td>
                        <a className="btn btn-primary btn-sm" href={`/${post._id}`}>View Detail</a>
                        <a href={`/${post._id}/edit_post`} className="btn btn-primary btn-sm mh-8">Edit</a>
                        <a href="/" className="btn btn-danger btn-sm">Delete</a>
                    </td>
                </tr>
            );
        });
    }

    return (
        <div className="blogList pt-4">
            <div className="container-fluid">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Id</th>
                            <th scope="col">Title</th>
                            <th scope="col">Created at</th>
                            <th scope="col">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {getBlogList()}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default BlogList;