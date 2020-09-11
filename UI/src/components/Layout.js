import React from 'react';
import AppHeader from './AppHeader';
import Footer from './Footer';
import getComponent from './Pages';

const Layout = (props) => {

  const { appHeader, appBody, appFooter } = props;

  const { isHeaderFooter } = appBody;

  return (
    <div className="ui-app">
      {!isHeaderFooter && <AppHeader {...appHeader} />}
      <div className="ui-body">
        {getComponent(appBody)}
      </div>
      {!isHeaderFooter && <Footer {...appFooter} />}
    </div>
  );
};

export default Layout;
