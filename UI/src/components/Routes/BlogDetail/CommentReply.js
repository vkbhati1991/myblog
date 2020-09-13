import React, { useState } from 'react';
import getDateAndTime from '../../../../dateFormate';
import API from '../../../../api';
import CommentForm from './CommentForm';

const CommentReply = (props) => {

    const [isReply, setReply] = useState(false);
    const { c, commentId } = props;

    return (
        <>
            <div className="comment-row pt-30 comment-row--reply">
                <div className="comment-auth-row flex items-center">
                    <div className="commentuser-info flex items-center flex-1">
                        <div className="comment-user-img ht-3 wt-3 mid br-pill overflow-hidden">
                            <img src={`${API.URL}/images/reply.png`} alt="user" />
                        </div>
                        <div className="comment-user-content ph-16">
                            <div className="user-name f15 ff-medium">{c.name}</div>
                            <div className="comment-date f14 secondary pt-4">{getDateAndTime(c.createdAt)}</div>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <a onClick={() => { setReply(true); }} className="replybtn pointer primary">Reply</a>
                    </div>
                </div>
                <div className="comment-content mt-20 bg-near-white br4 pa-16 f15 secondary">
                    <p>{c.message}</p>
                </div>
                {isReply && <CommentForm commentId={commentId} setReply={setReply} replyComment />}
            </div>
        </>
    );
};

export default CommentReply;