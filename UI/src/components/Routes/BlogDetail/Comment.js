import React from 'react';
import CommentItem from './CommentItem';

const Comment = (props) => {
    return (
        <div className="comment-container mt-30 f16 lh-copy ba b--light-gray pa-20 br10">
            <h2 className="ff-bold f18">Comments:</h2>
            {commentList(props, props.session)}
        </div>
    );
};

const getComment = (commentsArray, sessions) => {

    return commentsArray.map((c, i) => {
        return (
            <CommentItem c={c} key={i} session={sessions} />
        );
    });
};

const commentList = (props, sessions) => {
    const { comments } = props;
    if (!comments || comments.length <= 0) return;

    return (
        <div className="comment-container">
            {getComment(comments, sessions)}
        </div>
    );
};

export default Comment;