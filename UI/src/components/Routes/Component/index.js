import React from 'react';
import CompList from './CompList';

const Comp = (props) => {
    return (
        <div className="comp-content">
            <CompList {...props}/>
        </div>
    );
};

export default Comp;