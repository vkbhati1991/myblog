import React from 'react';

const Aboutus = () => {
    return (
        <div className="about-us pv-60">
            <div className="ui-container">
                <div className="grd-row items-center">
                    <div className="grd-col-6">
                        <div className="grd-row items-center">
                            <div className="grd-col-6 pa-12">
                                <div className="aboutImage br10 overflow-hidden relative">
                                    <div className="aboutImageBody">
                                        <img className="abt-img trans-5" src="./images/ab01.jpg" />
                                        <div className="abt-img-content trans-3">
                                            <div className="ablout-img-designation ff-bold f18 mb-4">Lead Engineer</div>
                                            <div className="ablout-img-dept">Product Development Group</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="grd-col-6 pa-12">
                                <div className="aboutImage br10 overflow-hidden relative">
                                    <div className="aboutImageBody">
                                        <img className="abt-img trans-5" src="./images/ab02.jpg" />
                                        <div className="abt-img-content trans-3">
                                            <div className="ablout-img-designation ff-bold f18 mb-4">Lead Engineer</div>
                                            <div className="ablout-img-dept">Product Development Group</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="aboutImage br10 overflow-hidden relative mt-24">
                                    <div className="aboutImageBody">
                                        <img className="abt-img trans-5" src="./images/ab03.jpg" />
                                        <div className="abt-img-content trans-3">
                                            <div className="ablout-img-designation ff-bold f18 mb-4">Lead Engineer</div>
                                            <div className="ablout-img-dept">Product Development Group</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grd-col-6 pa-12">
                        <h1 className="aboutus-title ff-medium f30">Our Story</h1>
                            <div className="aboutus-content lh-copy f16 ">
                                <p><span className="ff-bold brand">The uiSolution</span> is one of the best platform for the web application <br></br><span className="ff-bold primary">‘UI developers or Client side developers’</span>. We help you to provide the variety of solutions related to UI/UX <span className="ff-bold">(React, ES6, Javascript, Vue js, Angular js, Webapck, HTML, CSS, SCSS...etc...)</span>. So that every developer use the code in your application according to your project requirement, Our Goal is to collect all the best and amazing content, examples and scripts all over the world.</p>
                                <p className="pv-16">Please note that all the resources are gathered by users and public sources on the internet.  If resources have violated your copyright, please through feedback to us so that we can delete a timely manner to protect you! All the Resources are free for non-commercial use. For commercial use please contact the Original Author.</p>
                                <p>If you have any questions and advices, please use <a href="/contact" className="ff-medium bb b--brand">Contact Us</a> page to email us and we will get back to you within 24 hours.</p>
                            </div>
                        <div className="pt-30">
                            <a href="/" className="button button--brand ttc ff-medium f15 h-auto pv-12 ph-16 wt-10 mid">Know More
                    <svg xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="wt16 ht16 mh-8"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Aboutus;