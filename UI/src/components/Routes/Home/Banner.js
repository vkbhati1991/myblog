import React from 'react';
import CDN from '../../../../cdn';

const Banner = (props) => {
    return (
        <div className="section pv-60">
            <div className="ui-container-flex">
                <div className="grd-col-7">
                    <h1 className="ff-medium lh-title f50 mb-16">{props.head} <br />
                        <span className="brand">{props.head2}</span></h1>
                    <p className="f18 secondary lh-copy mb-32 ">{props.desc}</p>
                    <div className="flex items-center">
                        <a href="/blog" className="button button--brand ttc ff-medium f15  h-auto pv-12 ph-16 wt-10 mid">Get Started</a>
                        <a className="button button--outline-brand ttc ff-medium mh-16 f15 h-auto pv-12 ph-16 wt-10 mid">Subscribe Now</a>
                    </div>
                </div>
                <div className="grd-col-5">
                    <img src={`${CDN.BASEIMAGE}/banner.svg`} />
                </div>
            </div>
        </div>
    );
};

export default Banner;