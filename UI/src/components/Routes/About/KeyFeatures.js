import React from 'react';
import Section from '../../Section';

const KeyFeatures = () => {
    return (
        <Section
            extraClass="b--light-gray"
            title="Key Features"
            desc="Here We provide the best solution for everything you need to generate awareness, drive traffic, connect.">
            <div className="keyFeatures pt-40">
                <div className="grd-row">
                    <div className="grd-col-md-4 pa-12">
                        <div className="feature-card bg-white br10 pa-16 ba b--light-gray flex items-center">
                            <div className="ht-3 wt-3 br-pill mid feature-icon">
                                <span className="material-icons-outlined f24 brand">
                                    dvr
                                </span>
                            </div>
                            <div className="f18 ff-medium ph-16 pointer">Fully Responsive</div>
                        </div>
                    </div>
                    <div className="grd-col-md-4 pa-12">
                        <div className="feature-card bg-white br10 pa-16 ba b--light-gray flex items-center">
                            <div className="ht-3 wt-3 br-pill mid feature-icon">
                                <span className="material-icons-outlined f24 brand">
                                aspect_ratio
                                </span>
                            </div>
                            <div className="f18 ff-medium ph-16 pointer">Browser Compatibility</div>
                        </div>
                    </div>
                    <div className="grd-col-md-4 pa-12">
                        <div className="feature-card bg-white br10 pa-16 ba b--light-gray flex items-center">
                            <div className="ht-3 wt-3 br-pill mid feature-icon">
                                <span className="material-icons-outlined f24 brand">
                                code
                                </span>
                            </div>
                            <div className="f18 ff-medium ph-16 pointer">Clean Code</div>
                        </div>
                    </div>
                    <div className="grd-col-md-4 pa-12">
                        <div className="feature-card bg-white br10 pa-16 ba b--light-gray flex items-center">
                            <div className="ht-3 wt-3 br-pill mid feature-icon">
                                <span className="material-icons-outlined f24 brand">
                                dashboard
                                </span>
                            </div>
                            <div className="f18 ff-medium ph-16 pointer">Designed Component</div>
                        </div>
                    </div>
                    <div className="grd-col-md-4 pa-12">
                        <div className="feature-card bg-white br10 pa-16 ba b--light-gray flex items-center">
                            <div className="ht-3 wt-3 br-pill mid feature-icon">
                                <span className="material-icons-outlined f24 brand">
                                gavel
                                </span>
                            </div>
                            <div className="f18 ff-medium ph-16 pointer">Based On SCSS/CSS</div>
                        </div>
                    </div>
                    <div className="grd-col-md-4 pa-12">
                        <div className="feature-card bg-white br10 pa-16 ba b--light-gray flex items-center">
                            <div className="ht-3 wt-3 br-pill mid feature-icon">
                                <span className="material-icons-outlined f24 brand">
                                add_task
                                </span>
                            </div>
                            <div className="f18 ff-medium ph-16 pointer">Web Standered</div>
                        </div>
                    </div>
                    
                </div>
                <div className="mid pt-30">
                    <a href="/#" className="button button--brand ttc ff-medium mh-16 f15 h-auto pv-12 ph-16 wt-10 mid">See More
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
        </Section>
    );
};

export default KeyFeatures;