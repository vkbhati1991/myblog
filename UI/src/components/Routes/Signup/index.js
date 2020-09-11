import React from 'react';

const SignUp = () => {
    return (
        <section className="signup-section flex items-center overflow-hidden">
            <a href="/" className="backToHome fixed ba b--brand mid br4 ht34 wt34">
                <span className="material-icons-outlined pointer f18 brand">
                    account_balance
                </span>
            </a>
            <div className="ui-container flex-1">
                <div className="grd-row items-center">
                    <div className="grd-col-7">
                        <img src="./images/signup.svg" />
                    </div>
                    <div className="grd-col-5">
                        <form className="auth-card ba b--light-gray br6 pv-24 ph-12">
                            <h4 className="mb-12 f24 ff-medium tc">Signup</h4>
                            <div className="grd-row">
                                <div className="grd-col-6 pa-12">
                                    <div className="auth-form-row">
                                        <label className="auth-form-label ff-bold primary f14 mb-8 db">First Name
                                        <span className="form-mand red">*</span></label>
                                        <div className="input-group input-group--lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                            <input type="text" className="form-control" placeholder="First Name" />
                                        </div>
                                    </div>
                                </div>
                                <div className="grd-col-6 pa-12">
                                    <div className="auth-form-row">
                                        <label className="auth-form-label ff-bold primary f14 mb-8 db">Last Name
                                        <span className="form-mand red">*</span></label>
                                        <div className="input-group input-group--lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon">
                                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                                <circle cx="8.5" cy="7" r="4"></circle>
                                                <polyline points="17 11 19 13 23 9"></polyline>
                                            </svg>
                                            <input type="text" className="form-control" placeholder="Last Name" />
                                        </div>
                                    </div>
                                </div>
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

                            <div className="grd-row">
                                <div className="grd-col-12 pa-12">
                                    <div className="auth-form-row">
                                        <label className="auth-form-label ff-bold primary f14 mb-8 db">Password
                                        <span className="form-mand red">*</span></label>
                                        <div className="input-group input-group--lg">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="auth-form-icon">
                                                <path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4"></path>
                                            </svg>
                                            <input type="password" autoComplete="false" className="form-control" placeholder="Password" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="grd-row">
                                <span className="checkbox flex items-center pa-12">
                                    <input type="checkbox" className="checkbox__input" id="acceptTerm" />
                                    <label htmlFor="acceptTerm" className="checkbox__label f14 ff-bold">I Accept <a className="brand" href="#/term">Terms And Condition</a></label>
                                </span>
                            </div>
                            <div className="grd-row pa-12">
                                <button type="submit" className="button button--brand db wt--100 tc f16 ff-medium pv-10 h-auto">Register</button>
                            </div>
                            <div className="pa-12 tc">
                                <div className="f16 tc ff-memdium">Or Signup With</div>
                                <div className="socialIcon flex mt-20 mid">
                                    <a className="ht34 wt34 socialLink br4 ba mid f20 trans-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="f16"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                                    </a>
                                    <a className="ht34 wt34 socialLink br4 ba mid f20 trans-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram fea icon-sm fea-social">
                                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                                        </svg>
                                    </a>
                                    <a className="ht34 wt34 socialLink br4 ba mid f20 trans-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter fea icon-sm fea-social">
                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                        </svg>
                                    </a>
                                    <a className="ht34 wt34 socialLink br4 ba mid f20 trans-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin fea icon-sm fea-social">
                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                            <rect x="2" y="9" width="4" height="12"></rect>
                                            <circle cx="4" cy="4" r="2"></circle>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="mid pa-12 f14">
                                Already have an account ? <a className="f16 ff-medium brand ph-12" href="#/login">Sign in</a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;