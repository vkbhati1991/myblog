import React from 'react';
import AppLogo from './AppLogo';
import AppMenu from './AppMenu';
import Auth from './Auth';

const AppHeader = (props) => {

    const { nav } = props;
    
    return (
        <header className="ui-header ht-5 flex items-center bg-white">
            <div className="ui-container-flex">
                <AppLogo />
                <AppMenu nav={nav} />
                <Auth />
            </div>
        </header>
    );
};

export default AppHeader;