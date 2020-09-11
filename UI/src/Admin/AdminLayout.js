import React from 'react';
import getAdminComponent from './AdminPages';

import AdminHeader from './AdminHeader/index';
import AdminNav from './AdminNav';

const AdminLayout = (props) => {

  const { adminHeader, adminBody } = props;

  return (
    <div className="admin-app">
      {<AdminHeader {...adminHeader} />}
      <div className="admin-body">
        <div className="grd-row">
          <div className="grd-col-3 bg-brand">
            <AdminNav />
          </div>
          <div className="grd-col-9 pa-24">
            {getAdminComponent(adminBody)}
          </div>
        </div>

      </div>
    </div>
  );
};

export default AdminLayout;
