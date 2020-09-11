import React from 'react';

const Recovery = () => {
    return (
        <section className="signup-section flex items-center overflow-hidden">
            <a href="#/" className="backToHome fixed ba b--brand mid br4 ht34 wt34">
                <span className="material-icons-outlined pointer f18 brand">
                    account_balance
                </span>
            </a>
            <div className="ui-container flex-1">
                <div className="grd-row items-center">
                    <div className="grd-col-7">
                        <img src="./images/recovery.svg" />
                    </div>
                    <div className="grd-col-5">
                        <form className="auth-card ba b--light-gray br6 pv-24 ph-12">
                            <h4 className="mb-12 f24 ff-medium tc">Recover Account</h4>

                            <div className="pa-12 lh-copy">
                                Please enter your email address. You will receive a link to create a new password via email.

                            </div>

                            <div className="grd-row">
                                <div className="grd-col-12 pa-12">
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

                            <div className="grd-row pa-12">
                                <button type="submit" className="button button--brand db wt--100 tc f16 ff-medium pv-10 h-auto">Send</button>
                            </div>

                            <div className="mid pa-12 f14">
                                Remember your password  ? <a className="f16 ff-medium brand ph-12" href="#/login">Sign In</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recovery;