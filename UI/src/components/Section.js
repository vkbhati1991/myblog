import React from 'react';

const Section = (props) => {
    return (
        <section className={`section pv-60 ${props.extraClass}`}>
            <h2 className="section-title f30 ff-medium pb-24 primary tc">{props.title}</h2>
            <div className="section-desc tc lh-copy secondary">{props.desc}</div>
            <div className="ui-container">
                {props.children}
            </div>
        </section>
    );
};

export default Section;