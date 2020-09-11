import React from 'react';
import Banner from './Banner';
import Solution from './Solution';
import HowWeWork from './HowWeWork';
import BlogSection from './BlogSection';

const Home = (props) => {
    const { pageModel } = props;
    if (!pageModel) return;

    return (
        <div className="home-content">
            <Banner {...pageModel.banner} />
            <Solution {...pageModel.comp} />
            <HowWeWork {...pageModel.howItWork} />
            <BlogSection {...pageModel.blog} />
        </div>
    );
};

export default Home;