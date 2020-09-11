import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="ui-container pv-60">
                <div className="grd-row">
                    <div className="grd-col-md-4 ph-12">
                        <div className="footerbox">
                            <div className="footer-title f20 ff-medium near-white">About Us</div>
                            <div className="footer-aboutus lh-copy f16 mt-20">{props.about.desc}
                            </div>
                            <div className="socialIcon flex mt-20">
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
                    </div>
                    <div className="grd-col-md-2 ph-12">
                        <div className="footerbox">
                            <div className="footer-title f20 ff-medium near-white pb-20">Company</div>
                            <a href="#/about" className="flex items-center mb-16 text-foot">
                                <span className="material-icons-outlined f16"> keyboard_arrow_right</span>
                                <span className="ph-8 f16">About Us</span>
                            </a>

                            <a href="#/blog" className="flex items-center mb-16 text-foot">
                                <span className="material-icons-outlined f16"> keyboard_arrow_right</span>
                                <span className="ph-8 f16">Blog</span>
                            </a>
                            <a href="#/" className="flex items-center mb-16 text-foot">
                                <span className="material-icons-outlined f16"> keyboard_arrow_right</span>
                                <span className="ph-8 f16">Login</span>
                            </a>
                        </div>
                    </div>
                    <div className="grd-col-md-3 ph-12">
                        <div className="footerbox">
                            <div className="footer-title f20 ff-medium near-white pb-20">Usefull Links</div>
                            <a href="#/term" className="flex items-center mb-16 text-foot">
                                <span className="material-icons-outlined f16"> keyboard_arrow_right</span>
                                <span className="ph-8 f16"> Terms of Services</span>
                            </a>
                            <a href="#/policy" className="flex items-center mb-16 text-foot">
                                <span className="material-icons-outlined f16"> keyboard_arrow_right</span>
                                <span className="ph-8 f16"> Privacy Policy</span>
                            </a>

                            <a href="#/comp" className="flex items-center mb-16 text-foot">
                                <span className="material-icons-outlined f16"> keyboard_arrow_right</span>
                                <span className="ph-8 f16"> Components</span>
                            </a>
                        </div>
                    </div>
                    <div className="grd-col-md-3 ph-12">
                        <div className="footerbox">
                            <div className="footer-title f20 ff-medium near-white">Newsletter</div>
                            <div className="lh-copy f16 mt-20">Sign up and receive the latest tips via email.</div>
                        </div>
                        <div className="subscribe-form">
                            <label className="db mt-20 mb-12 ff-bold f14">Write your email</label>
                            <div className="subscribe-form-control relative">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail fea icon-sm icons"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <input type="text" className="subscribe-control br6 f14 trans-3" placeholder="Your Email:" />
                            </div>
                            <button className="button button--brand mt-20 wt--100 tc footersubscribeBtn mid ff-medium f16 pv-10 h-auto">Subscribe</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mid copyright pa-20 f16 bt">© 2019-20 uiSolution. Design with  by
            <span className="material-icons mh-12 green">sentiment_very_satisfied</span> Vinod Kumar.</div>
        </footer>
    );
};

export default Footer;