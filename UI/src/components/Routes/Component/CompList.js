import React from 'react';
import CDN from '../../../../cdn';

const getList = (componentList) => {

    if (!componentList || componentList.length <= 0) return;

    return componentList.map((c, i) => {

        return (
            <>
                <div key={i} className="grd-col-3 pa-12">
                    <div className="tech-card bg-white br10 pa-24 trans-3 ba b--light-gray">
                        <div className="tech-card-img wt50 m-auto  pb-20">
                            <img src={`${CDN.BASEUPLOAD}/${c.imageUrl}`} alt={c.imageUrl} />
                        </div>
                        <a href={`/comp/${c._id}`} className="tech-card-title f20 db tc primary ff-medium mb-12">{c.title}</a>
                        <a href={`/comp/${c._id}`} className="tech-card-desc db secondary f16 lh-copy tc">{c.desc}</a>
                    </div>
                </div>
            </>
        );
    });
};

const CompList = (props) => {
    const { heading, desc, pagination, componentList } = props.pageModel;

    return (
        <section className="section pv-60 bt b--light-gray">
            <div className="ui-container-flex items-center ph-24">
                <div className="flex-1">
                    <h2 className="section-title f30 ff-medium pb-16 primary">{heading}</h2>
                    <div className="lh-copy secondary grd-col-8">{desc}</div>
                </div>

                <div className="searchBlog max--wt-30 wt--100 ht-3 bg-white br10 ba b--light-gray flex items-center">
                    <input placeholder="Search Components..." type="text" className="blgSearch br10 ht40 bg-transparent ph-16 f16 primary bn flex-1" />
                    <span className="material-icons-outlined ph-16 f20 secondary pointer">search</span>
                </div>

            </div>

            <div className="ui-container">

                <div className="grd-row pt-40">
                    {getList(componentList)}
                </div>
                {
                    pagination && <div className="mid pv-30">
                        <div className="button-group pagination-ui">
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">Prev</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">First</a>
                            <a className="button button--large button--brand f16 b--light-gray" href="#/" role="button">1</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">2</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">3</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">4</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">Last</a>
                            <a className="button button--large button--outline-brand f16 b--light-gray" href="#/" role="button">Next</a>
                        </div>
                    </div>
                }

            </div>
        </section>
    );
};

export default CompList;