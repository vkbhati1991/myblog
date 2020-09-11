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
                        <p className="aboutus-content lh-copy f16 ">Start working with Landrick that can provide everything you need to generate awareness, drive traffic, connect. Dummy text is text that is used in the publishing industry or by web designers to occupy the space which will later be filled with content. This is required when, for example, the final text is not yet available. Dummy texts have been in use by typesetters since the 16th century.</p>
                        <div className="pt-30">
                            <a href="/#" className="button button--brand ttc ff-medium f15 h-auto pv-12 ph-16 wt-10 mid">Know More
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