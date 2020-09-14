import React from 'react';
import API from '../../../api';

const AppLogo = () => {
    return (
        <a className="ui-logo flex items-center" href="/">
            <span className="ui-logo-icon wt28"><img src={`${API.URL}/images/coding.svg`} /></span>
            <span className="ui-logo-text ph-8 f20 ff-black primary">uiSolution</span>
        </a>
    );
};

export default AppLogo;