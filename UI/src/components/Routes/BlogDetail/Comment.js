import React from 'react';

const Comment = () => {
    return (
        <div className="comment-container mt-30 f16 lh-copy ba b--light-gray pa-20 br10">
            <h2 className="ff-bold f18">Comments:</h2>
            {commentList()}
        </div>
    );
};

const commentList = () => {
    return (
        <div className="comment-container">
            <div className="comment-row pt-30">
                <div className="comment-auth-row flex items-center">
                    <div className="commentuser-info flex items-center flex-1">
                        <div className="comment-user-img ht-3 wt-3 mid br-pill overflow-hidden">
                            <img src="./images/1jpg.jpg" alt="user" />
                        </div>
                        <div className="comment-user-content ph-16">
                            <div className="user-name f15 ff-medium">Lorenzo Peterson</div>
                            <div className="comment-date f14 secondary pt-4">15th August, 2019 at 01:25 pm</div>
                        </div>
                    </div>
                    <a href="#" className="replybtn pointer primary">Reply</a>
                </div>
                <div className="comment-content mt-20 bg-near-white br4 pa-16 f15 secondary">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                </div>
            </div>

            <div className="comment-row comment-row--reply pt-30">
                <div className="comment-auth-row flex items-center">
                    <div className="commentuser-info flex items-center flex-1">
                        <div className="comment-user-img ht-3 wt-3 mid br-pill overflow-hidden">
                            <img src="./images/1jpg.jpg" alt="user" />
                        </div>
                        <div className="comment-user-content ph-16">
                            <div className="user-name f15 ff-medium">Lorenzo Peterson</div>
                            <div className="comment-date f14 secondary pt-4">15th August, 2019 at 01:25 pm</div>
                        </div>
                    </div>
                    <a href="#" className="replybtn pointer primary">Reply</a>
                </div>
                <div className="comment-content mt-20 bg-near-white br4 pa-16 f15 secondary">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                </div>
            </div>
            
            <div className="comment-row pt-30">
                <div className="comment-auth-row flex items-center">
                    <div className="commentuser-info flex items-center flex-1">
                        <div className="comment-user-img ht-3 wt-3 mid br-pill overflow-hidden">
                            <img src="./images/1jpg.jpg" alt="user" />
                        </div>
                        <div className="comment-user-content ph-16">
                            <div className="user-name f15 ff-medium">Lorenzo Peterson</div>
                            <div className="comment-date f14 secondary pt-4">15th August, 2019 at 01:25 pm</div>
                        </div>
                    </div>
                    <a href="#" className="replybtn pointer primary">Reply</a>
                </div>
                <div className="comment-content mt-20 bg-near-white br4 pa-16 f15 secondary">
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour</p>
                </div>
            </div>
        </div>
    );
};

export default Comment;