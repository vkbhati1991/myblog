import React from 'react';

const TermList = () => {
    return (
        <section className="section pv-12">
            <div className="ui-container">
                <div className="term-confition pa-24 ba b--light-gray br10 mv-30">
                    <h1 className="lh-title f20 primary ff-medium mb-16 mt-0">Introduction :</h1>
                    <p className="secondary f16 lh-copy">It seems that only fragments of
                    the original text remain in the Lorem Ipsum texts
                    used today. One may speculate that over the course of
                     time certain letters were added or deleted at various positions within the text.</p>
                    <h1 className="lh-title f20 primary ff-medium mb-16 mt-30">User Agreements:</h1>
                    <p className="secondary f16 lh-copy mb-20">The most well-known dummy text is the  which is said to have originated in the 16th century. Lorem Ipsum is composed in a pseudo-Latin language which more or less corresponds to Latin. It contains a series of real Latin words. This ancient dummy text is also incomprehensible, but it imitates the rhythm of most European languages in Latin script. The advantage of its Latin origin and the relative meaninglessness of Lorum Ipsum is that the text does not attract attention to itself or distract the attention from the layout.</p>

                    <p className="secondary f16 lh-copy mb-20">There is now an abundance of readable dummy texts. These are usually used when a text is required purely to fill a space. These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.</p>

                    <h1 className="lh-title f20 red ff-medium mb-16 mt-0">Restrictions :</h1>
                    <p className="secondary f16 lh-copy mb-20">You are specifically restricted from all of the following :</p>
                    <ul>
                        <li className="flex items-center mb-12 secondary">
                            <span className="material-icons-outlined f14">keyboard_arrow_right</span>
                            <span className="f16 ph-8">Digital Marketing Solutions for Tomorrow</span>
                        </li>
                        <li className="flex items-center mb-12 secondary">
                            <span className="material-icons-outlined f14">keyboard_arrow_right</span>
                            <span className="f16 ph-8">Our Talented & Experienced Marketing Agency</span>
                        </li>

                        <li className="flex items-center mb-12 secondary">
                            <span className="material-icons-outlined f14">keyboard_arrow_right</span>
                            <span className="f16 ph-8">Create your own skin to match your brand</span>
                        </li>

                        <li className="flex items-center mb-12 secondary">
                            <span className="material-icons-outlined f14">keyboard_arrow_right</span>
                            <span className="f16 ph-8">Digital Marketing Solutions for Tomorrow</span>
                        </li>

                        <li className="flex items-center mb-12 secondary">
                            <span className="material-icons-outlined f14">keyboard_arrow_right</span>
                            <span className="f16 ph-8">Create your own skin to match your brand</span>
                        </li>
                        
                    </ul>

                    <div className="flex items-center mt-20">
                        <a href="/#" className="button button--brand">Accept</a>
                        <a href="/#" className="button button--outline-brand mh-12">Decline</a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TermList;