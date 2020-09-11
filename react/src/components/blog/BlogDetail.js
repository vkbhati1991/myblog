import React, { useContext, useState } from "react";
import notificationContext from "../../Context/NotificationContext";
import axios from "axios";
import API from "../../../api";

const BlogDetail = (props) => {

    const { pageModel } = props;
    if (!pageModel) return;

    const { post, postComment } = pageModel;

    const { showAlert } = useContext(notificationContext);
    const [commentData, setCommentData] = useState(null);
    const [replyData, setReplyData] = useState(null);
    function getBlogDetail() {

        if (!post) return;

        return (
            <>
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

            </>
        );
    }

    function renderReply(replies) {

        if (!replies || replies.length === 0) return null;

        return replies.map((reply, idx) => {
            return (
                <div key={idx} className="ba b--brand pa-12 br4 mt-16">
                    <div> {reply.content}</div>
                   
                </div>
            );
        });
    }

    function getComments() {
        const { comments } = postComment;
        if (comments) {

            return comments.map((comment, idx) => {
                return (
                    <div className="ba pa-12 br4 b--moon-gray mt-12" key={idx}>
                        {comment.content}
                        {renderReply(comment.replies)}
                        {getReplyForm(comment._id)}
                    </div>
                );
            });
        }

        return null;
    }

    const onSubmit = () => {
        axios.post(`http://localhost:8888/${post._id}/comment`, { content: commentData }).then((response) => {
            if (response.status === 200) {
                showAlert("success tp-20 tc", "Comment Publish successfully");
                window.location.replace(`${API.URL}/${post._id}`);
            }
        });
    };

    function getCommentForm() {
        return (
            <div className="bt b--monn-gray mt-24 pa-24">
                <textarea onChange={(e) => {
                    setCommentData(e.target.value);
                }}
                    id="content"
                    name="content"
                    className="form-control"
                ></textarea>
                <button onClick={onSubmit} type="button" className="button button--brand mt-20">POST</button>
            </div>
        );
    }

    const onReplySubmit = (id) => {
        axios.post(`http://localhost:8888/comment/${id}/reply`, { content: replyData }).then((response) => {
            if (response.status === 200) {
                showAlert("success tp-20 tc", "Comment Publish successfully");
                window.location.replace(`${API.URL}/${post._id}`);
            }
        });
    };

    function getReplyForm(id) {
        return (
            <div className="bt b--monn-gray mt-24 pa-24">
                <textarea onChange={(e) => {
                    setReplyData(e.target.value);
                }}
                    id="content"
                    name="content"
                    className="form-control"
                ></textarea>
                <button onClick={() => onReplySubmit(id)} type="button" className="button button--brand mt-20">POST</button>
            </div >
        );
    }

    return (
        <div className="blogDetail">
            <div className="container">
                {getBlogDetail()}
                {getComments()}
                {getCommentForm()}
            </div>
        </div>
    );
};

export default BlogDetail;