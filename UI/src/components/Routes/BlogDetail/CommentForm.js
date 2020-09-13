/*eslint-disable */
import React, { useContext } from 'react';
import { useForm } from "react-hook-form";
import notificationContext from "../../../Context/NotificationContext";
import axios from "axios";
import API from "../../../../api";

const CommentForm = (props) => {

    let defaultMessage = "";
    let defaultEmail = "";
    let defaultName = "";
    let isEdit = props.isEdit || false;

    const comment = props.comment;
    const replyComment = props.replyComment;
    if (comment) {
        defaultMessage = comment.message;
        defaultEmail = comment.email;
        defaultName = comment.name;
    }

    const { showAlert } = useContext(notificationContext);

    const { handleSubmit, register, errors } = useForm();

    const onSubmit = data => {
        if (props.replyComment) {
            axios.post(`${API.URL}/blog/comment/${props.commentId}/reply`, data).then((response) => {
                if (response.status === 200) {
                    showAlert("success tp-20 tc", "Comment Reply successfully");
                }
            });
        } else {
            if (isEdit) {
                axios.put(`${API.URL}/blog/comment/${comment._id}`, data).then((response) => {
                    if (response.status === 200) {
                        showAlert("success tp-20 tc", "Comment Post successfully");
                        props.setIsEdit(false);
                    }
                });
            } else {
                axios.post(`${API.URL}/blog/${props.blog._id}/comment`, data).then((response) => {
                    if (response.status === 200) {
                        showAlert("success tp-20 tc", "Comment Post successfully");
                    }
                });
            }
        }

    }

    return (
        <div className="comment-container mt-30 f16 lh-copy ba b--light-gray pa-20 br10">
            <h2 className="ff-bold f18">{replyComment ? "Reply" : "Leave A Comment"} :</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="db mt-20">
                <div className="grd-row grd-row-pa-none">
                    <div className="grd-col-12 pa-12">
                        <div className="auth-form-row">
                            <label className="auth-form-label ff-bold primary f14 mb-8 db">Message
                                        <span className="form-mand red">*</span></label>
                            <div className="input-group input-group--lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                <textarea
                                    type='text'
                                    defaultValue={defaultMessage}
                                    className="form-control"
                                    rows="6"
                                    name="message"
                                    placeholder="Message"
                                    ref={register({
                                        required: "Message is Required"
                                    })}
                                ></textarea>
                            </div>
                            {errors.message && <div className="f12 red ff-medium pt-8">{errors.message.message}</div>}
                        </div>
                    </div>

                </div>
                <div className="grd-row grd-row-pa-none">
                    <div className="grd-col-6 pa-12">
                        <div className="auth-form-row">
                            <label className="auth-form-label ff-bold primary f14 mb-8 db">Name
                                        <span className="form-mand red">*</span></label>
                            <div className="input-group input-group--lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    defaultValue={defaultName}
                                    name="name"
                                    ref={register({
                                        required: "Name is Required"
                                    })}
                                />
                            </div>
                            {errors.name && <div className="f12 red ff-medium pt-8">{errors.name.message}</div>}
                        </div>
                    </div>
                    <div className="grd-col-6 pa-12">
                        <div className="auth-form-row">
                            <label className="auth-form-label ff-bold primary f14 mb-8 db">Email
                                        <span className="form-mand red">*</span></label>
                            <div className="input-group input-group--lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Email"
                                    defaultValue={defaultEmail}
                                    name="email"
                                    ref={register({
                                        required: "Email is Required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid Email"
                                        }
                                    })}
                                />
                            </div>
                            {errors.email && <div className="f12 red ff-medium pt-8">{errors.email.message}</div>}
                        </div>
                    </div>
                </div>
                <div className="grd-row pa-12 grd-row-pa-none">
                    <button type="submit" className="button button--brand db wt--100 tc f16 ff-medium pv-10 h-auto">Send Message</button>
                </div>
            </form>
        </div>
    );
};

export default CommentForm;