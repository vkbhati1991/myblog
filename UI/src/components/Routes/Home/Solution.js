import React from 'react';
import Section from '../../Section';
import API from '../../../../api';

const solutionList = (props) => {

    const { compList } = props;

    if (!compList || compList.length <= 0) return;

    return compList.map((comp, i) => {
        return (
            <div key={i} className="grd-col-3 pa-12">
                <div className="tech-card bg-white br10 pa-24 trans-3">
                    <div className="tech-card-img wt50 m-auto  pb-20">
                        <img src={`${API.URL}/uploads/${comp.imageUrl}`} alt="react" />
                    </div>
                    <a href={`/comp/${comp._id}`} className="tech-card-title f20 db tc primary ff-medium mb-12">{comp.title}</a>
                    <a href={`/comp/${comp._id}`} className="tech-card-desc db secondary f16 lh-copy tc">{comp.desc}</a>
                </div>
            </div>
        );
    });
};

const Solution = (props) => {
    return (
        <Section
            extraClass="bg-near-white"
            title={props.head}
            desc={props.desc}
        >
            <div>
                <div className="grd-row pt-40">
                    {solutionList(props)}
                </div>
                <div className="mid pt-30">
                    <a href="/comp" className="button button--brand ttc ff-medium mh-16 f15 h-auto pv-12 ph-16 wt-10 mid">See More
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

export default Solution;