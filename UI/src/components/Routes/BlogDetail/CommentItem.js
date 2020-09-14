import React, { useState, useContext } from 'react';
import getDateAndTime from '../../../../dateFormate';
import API from '../../../../api';
import CommentForm from './CommentForm';
import notificationContext from '../../../Context/NotificationContext';
import axios from 'axios';
import CommentReply from './CommentReply';

const replyList = (repliesArray, commentId) => {
    if (!repliesArray || repliesArray.length <= 0) return;

    return repliesArray.map((c, i) => {
        return <CommentReply key={i} c={c} commentId={commentId} />;

    });
};

const CommentItem = (props) => {
    const { showAlert } = useContext(notificationContext);
    const [isEdit, setIsEdit] = useState(false);
    const [isReply, setReply] = useState(false);
    const { c, session } = props;

    if (isEdit) {
        return <CommentForm comment={c} setIsEdit={setIsEdit} isEdit />;
    }

    const onDelete = (id) => {
        axios.delete(`${API.URL}/blog/comment/${id}`).then((response) => {
            if (response.status === 200) {
                showAlert('success tp-20 tc', 'Comment Delete successfully');
            }
        });
    };

    return (
        <>
            <div className="comment-row pt-30">
                <div className="comment-auth-row flex items-center">
                    <div className="commentuser-info flex items-center flex-1">
                        <div className="comment-user-img ht-3 wt-3 mid br-pill overflow-hidden">
                            <img src={`${API.URL}/images/comment.png`} alt="user" />
                        </div>
                        <div className="comment-user-content ph-16">
                            <div className="user-name f15 ff-medium">{c.name}</div>
                            <div className="comment-date f14 secondary pt-4">{getDateAndTime(c.createdAt)}</div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        {session.isLoggedIn && <a onClick={() => { setIsEdit(true); }} className="replybtn pointer primary">Edit</a>}
                        {session.isLoggedIn && <a onClick={() => { onDelete(c._id); }} className="replybtn pointer primary mh-12">Delete</a>}
                        <a onClick={() => { setReply(true); }} className="replybtn pointer primary">Reply</a>
                    </div>
                </div>
                <div className="comment-content mt-20 bg-near-white br4 pa-16 f15 secondary">
                    <p>{c.message}</p>
                </div>
                {isReply && <CommentForm commentId={c._id} setReply={setReply} replyComment />}
            </div>
            {replyList(c.replies, c._id)}
        </>
    );
};

export default CommentItem;