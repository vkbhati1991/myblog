import React from 'react';

const CommentForm = () => {
    return (
        <div className="comment-container mt-30 f16 lh-copy ba b--light-gray pa-20 br10">
            <h2 className="ff-bold f18">Leave A Comment :</h2>
            <form className="db mt-20">
                <div className="grd-row grd-row-pa-none">
                    <div className="grd-col-12 pa-12">
                        <div className="auth-form-row">
                            <label className="auth-form-label ff-bold primary f14 mb-8 db">Message
                                        <span className="form-mand red">*</span></label>
                            <div className="input-group input-group--lg">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                                <textarea type="text" className="form-control" rows="6" placeholder="Message" ></textarea>
                            </div>
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
                                <input type="text" className="form-control" placeholder="Name" />
                            </div>
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
                                <input type="text" className="form-control" placeholder="Email" />
                            </div>
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