import React from 'react';
import TermBanner from './TermBanner';
import TermList from './TermList';

const TermCondition = () => {
    return (
        <div className="term-content">
            <TermBanner />
            <TermList />
        </div>
    );
};

export default TermCondition;