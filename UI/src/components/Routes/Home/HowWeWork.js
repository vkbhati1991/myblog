import React from 'react';
import Section from '../../Section';

const HowWeWork = (props) => {
    return (
        <Section
            extraClass="b--light-gray"
            title={props.head}
            desc={ props.desc }
        >
            <div className="howDoWeWork">
                <div className="grd-row pt-40">
                    <div className="grd-col-4 pa-12">
                        <div className="work-card bg-white br10 pa-24 trans-3 relative">
                            <div className=" mid work-card-img wt70 ht70 bg-near-brand br6 m-auto">
                                <span className="material-icons-outlined f40 brand">person_search</span>
                            </div>
                            <div className="work-card-title f20 db tc primary ff-medium pt-30 pb-12">Search Problem</div>
                            <div className="work-card-desc db secondary f16 lh-copy tc">A JavaScript library for building user interfaces</div>
                        </div>
                    </div>
                    <div className="grd-col-4 pa-12 mt-40">
                        <div className="work-card bg-white br10 pa-24 trans-3 relative">
                            <div className=" mid work-card-img wt70 ht70 bg-near-brand br6 m-auto">
                                <span className="material-icons-outlined f40 brand">design_services</span>
                            </div>
                            <div className="work-card-title f20 db tc primary ff-medium pt-30 pb-12">Strategy & Development</div>
                            <div className="work-card-desc db secondary f16 lh-copy tc">A JavaScript library for building user interfaces</div>
                        </div>
                    </div>
                    <div className="grd-col-4 pa-12 mt-80">
                        <div className="work-card work-card-noAfter bg-white br10 pa-24 trans-3 relative">
                            <div className=" mid work-card-img wt70 ht70 bg-near-brand br6 m-auto">
                                <span className="material-icons-outlined f40 brand">published_with_changes</span>
                            </div>
                            <div className="work-card-title f20 db tc primary ff-medium pt-30 pb-12">Publish Code</div>
                            <div className="work-card-desc db secondary f16 lh-copy tc">A JavaScript library for building user interfaces</div>
                        </div>
                    </div>

                </div>
            </div>
        </Section>
    );
};

export default HowWeWork;