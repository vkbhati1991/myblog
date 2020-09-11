import React from 'react';
import AboutBanner from './AboutBanner';
import Aboutus from './Aboutus';
import KeyFeatures from './KeyFeatures';

const About = () => {
    return (
        <div className="about-content">
            <AboutBanner />
            <Aboutus />
            <KeyFeatures />
        </div>
    );
};

export default About;