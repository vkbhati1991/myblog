import React from 'react';
import PolicyBanner from './PolicyBanner';
import PolicyList from './PolicyList';

const Policy = () => {
    return (
        <div className="policy-content">
            <PolicyBanner />
            <PolicyList />
        </div>
    );
};

export default Policy;